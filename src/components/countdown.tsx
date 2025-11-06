import { component$, useVisibleTask$, } from '@builder.io/qwik';

export const Countdown = component$(() => {
    // useTask$ does not work, document not defined
    // Consider using useTask$(), useOn(), useOnDocument(), or useOnWindow()
    useVisibleTask$(() => {
        // Dynamic import ensures it only runs on client
        import('simplycountdown.js').then((module) => {
            const simplyCountdown = module.default;

            simplyCountdown("#countdownEle", {
                year: 2026,
                month: 7,
                day: 25,
            });

        });
    });

    return <div class="my-countdown"></div>;
});