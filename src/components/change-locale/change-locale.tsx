import { isDev } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useSpeakLocale, useSpeakConfig, useDisplayName, inlineTranslate, LocalizePathFn } from 'qwik-speak';

let getLang = (): string => '';
const isDefaultDomain = (lang: string): boolean => {
    const config = useSpeakConfig();
    return config.supportedLocales.find(value => value.lang === lang)?.domain !== undefined;
};

const logWarn = (message: string) => {
    console.warn('\x1b[33mQwik Speak warn\x1b[0m %s', message);
};

const localizeDomain = (url: URL, lang: string): URL => {
    const config = useSpeakConfig();

    const locale = config.supportedLocales.find(value => value.lang === lang);
    const domain = locale?.domain || locale?.withDomain;

    if (!domain) {
        if (isDev) logWarn(`localizeDomain: domain not found`);
    } else if (!isDev) {
        if (!domain.startsWith('localhost')) {
            url.hostname = domain;
        } else {
            url.host = domain; // with port
        }
    }
    return url;
};

export const localizePath = (): LocalizePathFn => {
    const config = useSpeakConfig();
    const currentLang = getLang();

    const getRegEpx = (lang: string) => new RegExp(`(/${lang}/)|(/${lang}$)|(/(${lang})(?=\\?))`);

    const replace = (pathname: string, lang: string) => {
        const langParam = config.supportedLocales.find(locale => getRegEpx(locale.lang)?.test(pathname))?.lang;

        // Handle prefix
        if (langParam) {
            if (lang !== config.defaultLocale.lang) {
                pathname = pathname.replace(langParam, lang);
            } else {
                pathname = pathname.replace(getRegEpx(langParam), '/');
            }
        } else if (lang !== config.defaultLocale.lang) {
            pathname = `${pathname}/${lang}`;
        }

        // In prod, handle no prefix in domain-based routing
        if (!isDev) {
            if (config.domainBasedRouting?.prefix === 'as-needed' && isDefaultDomain(lang)) {
                pathname = pathname.replace(getRegEpx(lang), '/');
            }
        }

        return pathname;
    };

    const localize = (route: (string | URL) | string[], lang?: string) => {
        lang ??= currentLang;

        if (Array.isArray(route)) {
            return route.map(path => replace(path, lang!));
        }

        if (typeof route === 'string') {
            return replace(route, lang);
        }

        // Is URL
        let url = new URL(route);
        if (config.domainBasedRouting) {
            url = localizeDomain(url, lang);
        }

        url.pathname = replace(url.pathname, lang);

        // Return URL
        return url.toString().replace(/\/\?/, '?');
    };

    return localize as LocalizePathFn;
};

function getLangDis(value: string) {
    return value.split('-')[0];
}

export const ChangeLocale = component$(() => {
    const t = inlineTranslate();

    const pathname = useLocation().url.pathname;

    const locale = useSpeakLocale();
    const config = useSpeakConfig();
    const dn = useDisplayName();

    const getPath = localizePath();

    return (
        <>
            <div class="lang-switcher">
                {config.supportedLocales.map(value => (
                    <a key={value.lang} class={{ active: value.lang == locale.lang }} href={getPath(pathname, value.lang)}>
                        {getLangDis(value.lang)}
                    </a>
                ))}
            </div>
        </>
    );
});