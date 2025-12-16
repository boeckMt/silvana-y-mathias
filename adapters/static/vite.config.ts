import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      // https://github1s.com/QwikDev/qwik/blob/main/packages/qwik-city/src/static/types.ts#L41-L42
      // https://github1s.com/QwikDev/qwik/blob/main/packages/qwik/src/server/types.ts#L154-L155
      // for qwik-speak  https://github.com/robisim74/qwik-speak/blob/main/docs/translation-functions.md
      staticAdapter({
        origin: "https://boeckmt.github.io",
        // locale: 'de-DE'
      }),
    ],
  };
});
