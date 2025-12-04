import { component$ } from '@builder.io/qwik'
// import { NotifyButton } from './notify/notify';

interface ItemProps {
    id: string;
}

const imageTop = 'https://lh3.googleusercontent.com/d/17dbZi2y___lcUQsCrXQ1s4Xnf6RyETKS=s4000?authuser=0';
const imageEnd = 'https://lh3.googleusercontent.com/d/1D8LXL1zwOCXCJtFCbyizmWnhDMQiLWqN=s4000?authuser=0';

const introText = {
    text1: 'Liebe Freunde und Verwandte, wir freuen uns sehr euch zu unserer Hochzeit einzuladen.',
    text2: 'Weitere Details und Informationen zur Sause findet ihr unten.',
    text3: 'Bitte bestätigt uns ob ihr kommt, über den Link',
    text4: 'findet ihr mehr Informationen dazu.',
    text5: 'Da wir das Programm erst im Laufe des Jahres aktualisieren, schaut doch bitte ein paar Wochen vor der Hochzeit noch einmal hier rein :)'
};

export const IntroSection = component$<ItemProps>((props) => {
    return (
        <section class="section-light regular-section has-text-centered has-vertically-aligned-content"
            id={props.id}>

            <div data-aos="fade-up" data-aos-easing="linear">
                <img src={imageTop} class="intro-image has-text-centered" alt="intro image" width={100} height={20}></img>
            </div>

            <p class="bodytext" data-aos="fade-up" data-aos-easing="linear">
                {introText.text1}
                <br />
                {introText.text2}
                <br />
                {introText.text3} <a href='#rsvp'>RSVP</a> {introText.text4}
            </p>

            <p class="bodytext mt-6" data-aos="fade-up" data-aos-easing="linear">
                {introText.text5}
            </p>

            <span class="space40px"></span>
            <span class="space40px"></span>

            <div data-aos="fade-up" data-aos-easing="linear">
                <div class="name-big">
                    Silvana
                </div>
                <div class="ampersand">Y</div>
                <div class="name-big">
                    Mathias
                </div>

            </div>
            <span class="space40px"></span>
            <div data-aos="fade-up" data-aos-easing="linear">
                <img src={imageEnd} class="divider has-text-centered" alt="~~~" width={496.46} height={100}></img>
            </div>
            <span class="space40px"></span>
            <span class="space40px"></span>

            {/* <NotifyButton></NotifyButton> */}
        </section>
    )
});
