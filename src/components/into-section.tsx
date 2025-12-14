import { component$ } from '@builder.io/qwik'
import { inlineTranslate } from 'qwik-speak';

interface ItemProps {
    id: string;
}

const imageTop = `${import.meta.env.BASE_URL}assets/blumen_oben.png`; //'https://lh3.googleusercontent.com/d/17dbZi2y___lcUQsCrXQ1s4Xnf6RyETKS=s4000?authuser=0';


export const IntroSection = component$<ItemProps>((props) => {
    const t = inlineTranslate();

    const introText = {
        title: t('app.intro.title@@Willkommen'),
        text1: t('app.intro.text1@@Liebe Freunde und Verwandte, wir freuen uns sehr, euch zu unserer Hochzeit einzuladen!'),
        text2: t('app.intro.text2@@Alle wichtigen Infos zur Feier findet ihr weiter unten.'),
        text3: t('app.intro.text3@@Bitte gebt uns über den'),
        text4: t('app.intro.text4@@RSVP-Link'),
        text5: t('app.intro.text5@@Bescheid, ob ihr dabei seid.'),
        text6: t('app.intro.text6@@Das Programm wird im Laufe des Jahres ergänzt,'),
        text7: t('app.intro.text7@@schaut also ein paar Wochen vor der Hochzeit noch einmal vorbei :)')
    };

    return (
        <section class="section-color first bg-color-1 regular-section has-text-centered has-vertically-aligned-content"
            id={props.id}>

            <div data-aos="fade-up" data-aos-easing="linear">
                <img src={imageTop} class="intro-image has-text-centered" alt="intro image" width={496.46} height={200}></img>
            </div>


            <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                <h1 class="title has-text-centered section-title">{introText.title}</h1>
            </div>



            <p class="bodytext" data-aos="fade-up" data-aos-easing="linear">
                {introText.text1}
                <br />
                {introText.text2}
                <br />
                {introText.text3} <a href='#rsvp' class="link-in-text"><b>{introText.text4}</b></a> {introText.text5}
            </p>

            <p class="bodytext mt-6" data-aos="fade-up" data-aos-easing="linear">
                {introText.text6}
            </p>

            <p class="bodytext" data-aos="fade-up" data-aos-easing="linear">
                {introText.text7}
            </p>

            <div data-aos="fade-up" data-aos-easing="linear">
                <div class="name-big">
                    Silvana
                </div>
                <div class="ampersand">y</div>
                <div class="name-big">
                    Mathias
                </div>

            </div>
        </section>
    )
});
