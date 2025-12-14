import { component$ } from '@builder.io/qwik'
// import { NotifyButton } from './notify/notify';

interface ItemProps {
    id: string;
}

const imageTop = 'https://lh3.googleusercontent.com/d/17dbZi2y___lcUQsCrXQ1s4Xnf6RyETKS=s4000?authuser=0';
const imageEnd = 'https://lh3.googleusercontent.com/d/1D8LXL1zwOCXCJtFCbyizmWnhDMQiLWqN=s4000?authuser=0';

const introText = {
    title: 'Willkommen',
    text1: 'Liebe Freunde und Verwandte, wir freuen uns sehr, euch zu unserer Hochzeit einzuladen!',
    text2: 'Alle wichtigen Infos zur Feier findet ihr weiter unten.',
    text3: 'Bitte gebt uns über den',
    text4: 'RSVP-Link',
    text5: 'Bescheid, ob ihr dabei seid.',
    text6: 'Das Programm wird im Laufe des Jahres ergänzt,',
    text7: 'schaut also ein paar Wochen vor der Hochzeit noch einmal vorbei :)'
};

export const IntroSection = component$<ItemProps>((props) => {
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
