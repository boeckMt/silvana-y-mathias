import { component$ } from '@builder.io/qwik'

interface ItemProps {
    id: string;
}

const introText = {
    text1: 'Liebe Freunde und Verwandte, wir freuen uns sehr euch zu unserer Hochzeit einzuladen.',
    text2: 'Weitere Details und Informationen zur Sause findet ihr unten.',
    text3: 'Bitte bestätigt uns ob ihr kommt über den Google Kalender in der'
};

export const IntroSection = component$<ItemProps>((props) => {
    return (
        <section class="section-light regular-section has-text-centered has-vertically-aligned-content"
            id={props.id}>

            <div data-aos="fade-up" data-aos-easing="linear">
                <img src="placeholter2.png" class="intro-image has-text-centered" alt="intro image" width={100} height={20}></img>
            </div>

            <p class="bodytext" data-aos="fade-up" data-aos-easing="linear">
                {introText.text1}
                <br />
                {introText.text2}
                <br />
                {introText.text3} <a href='#rsvp'>RSVP</a>
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
                <img src="placeholter2.png" class="divider has-text-centered" alt="~~~" width={496.46} height={100}></img>
            </div>
            <span class="space40px"></span>
            <span class="space40px"></span>
        </section>
    )
});
