

import { component$ } from '@builder.io/qwik'
import { Countdown } from './countdown';
import { inlineTranslate } from 'qwik-speak';


export const HeroBody = component$(() => {
    const t = inlineTranslate();

    const heroText = {
        title1: t('app.hero.Title1@@Hochzeit von'),
        title2part1: 'Silvana',
        title2part2: 'y',
        title2part3: 'Mathias',
        title3: t('app.hero.Title3@@Samstag, 25 Juli 2026')
    }


    const heroImage = `${import.meta.env.BASE_URL}assets/llamitas_2.jpg`; // 'https://lh3.googleusercontent.com/d/1mH9k471hBhmFmiXUm93G3qAelbhWC8nH=s4000?authuser=0'; // 
    return (
        <>
            <div class="hero-image">
                <img src={heroImage} width={700} height={605}></img>
            </div>
            <section class="hero-intro pb-3 section-color regular-section has-text-centered has-vertically-aligned-content">
                <div class="container has-text-centered">
                    <h1 class="subtitle">{heroText.title1}</h1>
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
            </section>
        </>

    )

});