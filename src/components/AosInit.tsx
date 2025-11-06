import { component$, useVisibleTask$ } from '@builder.io/qwik';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AosInit = component$(() => {
    // useVisibleTask$ ->  Consider using useTask$(), useOn(), useOnDocument(), or useOnWindow()
    useVisibleTask$(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: false, // set to true if you want animations only once
        });
    });

    return null; // No visible output
});