import { component$, isDev, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider, RouterOutlet,
  //useLocation, useNavigate 
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import { useQwikSpeak } from 'qwik-speak';
import { config } from "./speak-config";
import { translationFn } from "./speak-functions";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */


  /**
   * Init Qwik Speak
   */
  useQwikSpeak({ config, translationFn });

  /*   const loc = useLocation();
    const nav = useNavigate(); */

  // TODO: find better solution for qwik.js
  useVisibleTask$(() => {

    const supportedLanguages = ['es-ES', 'en-EN', 'de-DE'];

    // Get the user's preferred languages from the browser settings
    const browserLangs = navigator.languages;

    // Find the first language the user prefers that you actually support
    let userLang = navigator.language;

    for (const lang of browserLangs) {
      // Use only the primary language code (e.g., 'en-US' becomes 'en')
      const primaryLangCode = lang.split('-')[0];
      if (supportedLanguages.map(i => i.split('-')[0]).includes(primaryLangCode)) {
        userLang = supportedLanguages.find(i => i.startsWith(primaryLangCode)) as never;
        console.log(userLang);
        break; // Stop loop once a match is found
      }
    }

    // Build the target URL path (assuming /en/, /es/, etc. structure)
    const currentPath = window.location.pathname;


    // Redirect the user only if they are not already on the correct language path
    // && userLang !== 'de-DE'
    if (!currentPath.includes(`${userLang}`)) {
      console.log(`${window.location.pathname}${userLang}`);
      /* const hasLang = supportedLanguages.some(searchString => {
        return window.location.pathname.includes(searchString);
      });

      if (hasLang) {
        // window.location.pathname = window.location.pathname.split('/')
      } else {
        window.location.pathname = `${window.location.pathname}/${userLang}`;
      } */

    }
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
