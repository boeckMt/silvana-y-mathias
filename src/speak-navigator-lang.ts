
import { config } from './speak-config';

/**
 * Return normalized base path without trailing slash ('' or '/silvana-y-mathias')
 */
export function normalizedBase(base?: string) {
    const b = (base || '').trim();
    if (!b) return '';
    // ensure starts with '/' and no trailing slash
    const withLeading = b.startsWith('/') ? b : '/' + b;
    return withLeading.endsWith('/') ? withLeading.slice(0, -1) : withLeading;
}

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
        const base = normalizedBase(config.basePath); // e.g. '/silvana-y-mathias' or ''
        const defaultPath = `${base}/`; // e.g. '/silvana-y-mathias/pathname' or '/pathname'
        const { pathname, search, hash } = window.location;

        // Build list of supported language tags (strings): ['de-DE','es-ES',...]
        const supportedLangs = (config.supportedLocales || []).map((s) => s.lang);

        // Regex to detect a locale segment immediately after defaultPath
        // example match: ^/silvana-y-mathias/pathname/([^/]+)
        const escapedDefault = defaultPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const localeSegmentRegex = new RegExp(`^${escapedDefault}/([^/]+)`, 'i');
        const localeSegmentMatch = pathname.match(localeSegmentRegex);

        if (localeSegmentMatch) {
            // Already on a localized path (e.g. /.../es-ES) -> do nothing.
            // This prevents overwriting deliberate URLs and avoids intercepting client-side language switches.
            return;
        }

        // Only attempt auto-redirect when user is at the exact default path (or with trailing slash)
        const isOnDefaultPath = pathname === defaultPath || pathname === (defaultPath + '/');
        if (!isOnDefaultPath) {
            // Not on the default path and no locale segment -> leave it alone
            return;
        }

        // 1) If user explicitly selected a locale before, respect it:
        const preferred = localStorage.getItem('preferredLocale');
        if (preferred && supportedLangs.includes(preferred)) {
            const target = `${defaultPath}/${preferred}${search}${hash}`;
            // Avoid redirect loop if already at same url
            if (target !== window.location.href && !window.location.href.endsWith(`${preferred}${search}${hash}`)) {
                window.location.replace(target); // initial redirect; replace is nice for UX
            }
            return;
        }

        // 2) No explicit preference -> pick from navigator on every load of default path
        const navLangs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
        const best = pickBestLocale(navLangs as string[], supportedLangs, config.defaultLocale.lang);

        const target = `${defaultPath}/${best}${search}${hash}`;
        if (target !== window.location.href && !window.location.href.endsWith(`${best}${search}${hash}`)) {
            window.location.replace(target);
        }
    } catch (e) {
        console.warn('auto-locale redirect error', e);
    }
}

export function getPathExplicit(pathname: string) {
    if (pathname === `${config.basePath}/`) {
        return `${config.basePath}/${config.defaultLocale.lang}/`
    } else {
        return pathname;
    }
}