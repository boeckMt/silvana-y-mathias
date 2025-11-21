import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <Slot />
    );
});

export const onRequest: RequestHandler = ({ locale, error }) => {
    // E.g. 404 error page
    if (!locale()) throw error(404, 'Page not found for requested locale');

    // E.g. Redirect
    // if (!locale()) {
    //   const getPath = localizePath();
    //   throw redirect(302, getPath('/page', 'en-US')); // Let the server know the language to use
    // }
};