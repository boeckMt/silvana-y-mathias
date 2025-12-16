import { component$, useVisibleTask$ } from '@builder.io/qwik';
import AOS from 'aos';
// import 'aos/dist/aos.css';

export const AosInit = component$(() => {
    // useVisibleTask$ ->  Consider using useTask$(), useOn(), useOnDocument(), or useOnWindow()
    useVisibleTask$(() => {

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/silvana-y-mathias/aos@3.0.0-beta.6/aos.css'; // <- use your correct absolute/base path
        document.head.appendChild(link);
        
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: false, // set to true if you want animations only once
        });
    });

    return null; // No visible output
});