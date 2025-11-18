

import { component$ } from '@builder.io/qwik'
import { Countdown } from './countdown';
import { _ } from 'compiled-i18n';

const heroText = {
    title1: 'Hochzeit von',
    title2part1: 'Silvana',
    title2part2: 'Y',
    title2part3: 'Mathias',
    title3: 'Samstag, 25 Juli 2026'
}

export const HeroBody = component$(() => {
    return (
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="subtitle">{_`Title1 ${heroText.title1}`}</h1>
                <h2 class="title">{heroText.title2part1} {heroText.title2part2} {heroText.title2part3}</h2>
                <h4 class="subtitle hero-body-title">
                    {heroText.title3}
                </h4>
            </div>

            <section class="countdownContainer">
                <div id="countdownEle" class="has-text-centered">
                </div>
            </section>
            <Countdown></Countdown>

        </div>
    )

});