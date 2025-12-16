import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
    defaultLocale: { lang: 'de', currency: 'EUR', timeZone: 'Europe/Rome' },
    basePath: '/silvana-y-mathias/',
    supportedLocales: [
        // default, not working on github pages so add a extra lang for de-DE
        // navigator.languages ['de-DE', 'en-US', 'es', 'de', 'en', 'fr']
        // all locales needs to be here, also the default to crete index.jtml files for it
        { lang: 'de', currency: 'EUR', timeZone: 'Europe/Rome' },
        { lang: 'de-DE', currency: 'EUR', timeZone: 'Europe/Rome' },
        { lang: 'es-ES', currency: 'SOL', timeZone: 'America/Los_Angeles' },
        { lang: 'en-EN', currency: 'USD', timeZone: 'America/Los_Angeles' }
    ],
    // Translations available in the whole app
    assets: [
        'app'
    ],
    // Translations with dynamic keys available in the whole app
    runtimeAssets: [
        'runtime'
    ]
};