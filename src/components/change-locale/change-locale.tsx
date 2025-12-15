import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useSpeakLocale, useSpeakConfig, useDisplayName, localizePath } from 'qwik-speak';
import { getPathExplicit } from '~/speak-navigator-lang';

function getLangDis(value: string) {
    return value.split('-')[0];
}

export const ChangeLocale = component$(() => {
    const pathname = useLocation().url.pathname;

    const locale = useSpeakLocale();
    const config = useSpeakConfig();
    const dn = useDisplayName();

    const getPath = localizePath();

    // filter out default, not working on github pages 
    const locales = config.supportedLocales.filter(i => i.lang !== 'de');

    return (
        <>
            <div class="lang-switcher">
                {locales.map(value => (
                    <a key={value.lang} class={{ active: value.lang == locale.lang }} href={getPathExplicit(getPath(pathname, value.lang))}
                        title={dn(value.lang, { type: 'language' })}>
                        {getLangDis(value.lang)}
                    </a>
                ))}
            </div>
        </>
    );
});