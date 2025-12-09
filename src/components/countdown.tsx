import { component$, useVisibleTask$, } from '@builder.io/qwik';
import { inlineTranslate } from 'qwik-speak';

export const Countdown = component$(() => {
    const t = inlineTranslate();
    // useTask$ does not work, document not defined
    // Consider using useTask$(), useOn(), useOnDocument(), or useOnWindow()

    const days = t('app.count.days@@');
    const hours = t('app.count.hours@@');
    const minutes = t('app.count.minutes@@');
    const seconds = t('app.count.seconds@@');

    useVisibleTask$(() => {
        // Dynamic import ensures it only runs on client
        import('simplycountdown.js').then((module) => {
            const simplyCountdown = module.default;

            simplyCountdown("#countdownEle", {
                year: 2026,
                month: 7,
                day: 25,
                words: {
                    days: {
                        // Function to handle pluralization
                        lambda: (root: string, count: number) => (count > 1 ? root : root),
                        root: days
                    },
                    hours: {
                        lambda: (root: string, count: number) => (count > 1 ? root : root),
                        root: hours
                    },
                    minutes: {
                        lambda: (root: string, count: number) => (count > 1 ? root : root),
                        root: minutes
                    },
                    seconds: {
                        lambda: (root: string, count: number) => (count > 1 ? root : root),
                        root: seconds
                    }
                }
            });

        });
    });

    return <div class="my-countdown"></div>;
});