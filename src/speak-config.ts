import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
    defaultLocale: { lang: 'de-DE', currency: 'EUR', timeZone: 'Europe/Rome' },
    supportedLocales: [
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