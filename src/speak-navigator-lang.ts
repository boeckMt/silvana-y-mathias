
import { config } from './speak-config';

/**
 * Pick best supported locale from navigator.languages:
 * prefer exact match, then language-only match (e.g. 'es' -> 'es-ES'), then fallback.
 */
export function pickBestLocale(userLangs: string[], supported: string[], fallback: string) {
    const supportedLower = supported.map((s) => s.toLowerCase());
    for (const l of userLangs) {
        const normal = (l || '').toLowerCase();
        const exactIdx = supportedLower.indexOf(normal);
        if (exactIdx >= 0) return supported[exactIdx];
        const langOnly = normal.split('-')[0];
        const match = supported.find((s) => s.toLowerCase().startsWith(langOnly + '-'));
        if (match) return match;
    }
    return fallback;
}

export function trySetNavigatorLang() {

    if (typeof window === 'undefined') return;

    try {
        const defaultPath = config.basePath!; // should be /silvana-y-mathias/ not /silvana-y-mathias
        const { pathname, search, hash } = window.location;

        // Build list of supported language tags (strings): ['de-DE','es-ES',...]
        const { locales, defaultlocale } = getDefaultAndSupported();
        const supportedLangs = (locales || []).map((s) => s.lang);

        // Regex to detect a locale segment immediately after defaultPath
        // example match: ^/silvana-y-mathias/([^/]+)
        const escapedDefault = defaultPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const localeSegmentRegex = new RegExp(`^${escapedDefault}/([^/]+)`, 'i');
        const localeSegmentMatch = pathname.match(localeSegmentRegex);

        if (localeSegmentMatch) {
            // Already on a localized path (e.g. /.../es-ES) -> do nothing.
            // This prevents overwriting deliberate URLs and avoids intercepting client-side language switches.
            return;
        }

        // Only attempt auto-redirect when user is at the exact default path - trailing slash is default
        const isOnDefaultPath = pathname === defaultPath;
        if (!isOnDefaultPath) {
            // Not on the default path and no locale segment -> leave it alone
            return;
        }

        // 1) If user explicitly selected a locale before, respect it:
        const preferred = localStorage.getItem('preferredLocale');
        if (preferred && supportedLangs.includes(preferred)) {
            const target = `${defaultPath}${preferred}${search}${hash}`;
            // Avoid redirect loop if already at same url
            if (target !== window.location.href && !window.location.href.endsWith(`${preferred}${search}${hash}`)) {
                window.location.replace(target); // initial redirect; replace is nice for UX
            }
            return;
        }

        // 2) No explicit preference -> pick from navigator on every load of default path
        const navLangs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
        const best = pickBestLocale(navLangs as string[], supportedLangs, defaultlocale!);
        
        const target = `${defaultPath}${best}${search}${hash}`;
        if (target !== window.location.href && !window.location.href.endsWith(`${best}${search}${hash}`)) {
            window.location.replace(target);
        }
    } catch (e) {
        console.warn('auto-locale redirect error', e);
    }
}

// only for github pages extra folder for default
export function getDefaultAndSupported() {
    const locales = config.supportedLocales.filter(i => i.lang !== config.defaultLocale.lang);
    const defaultlocale = locales.find(i => i.lang.includes(config.defaultLocale.lang))?.lang;

    return {
        locales,
        defaultlocale
    };
}

export function getPathExplicit(pathname: string) {
    if (pathname === `${config.basePath}`) {
        const { defaultlocale } = getDefaultAndSupported();
        return `${config.basePath}${defaultlocale}/`
    } else {
        return pathname;
    }
}