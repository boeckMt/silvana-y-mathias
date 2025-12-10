import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useSpeakLocale, useSpeakConfig, useDisplayName, inlineTranslate, localizePath } from 'qwik-speak';

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
                    <a key={value.lang} class={{ active: value.lang == locale.lang }} href={getPath(pathname, value.lang)}
                        title={dn(value.lang, { type: 'language' })}>
                        {getLangDis(value.lang)}
                    </a>
                ))}
            </div>
        </>
    );
});