import { component$ } from '@builder.io/qwik'

interface ItemProps {
    id: string;
}

const introText = {
    text1: 'Wir freuen uns sehr euch zu unserer Hochzeit einzuladen',
    text2: 'Weitere Details und Informationen zur Sause findet ihr unten.',
    text3: 'Bei Fragen meldet euch einfach bei...'
};

export const IntroSection = component$<ItemProps>((props) => {
    return (
        <section class="section-light regular-section has-text-centered has-vertically-aligned-content"
            id={props.id}>

            <div data-aos="fade-up" data-aos-easing="linear">
                <img src="image/intro-image.png" class="intro-image has-text-centered" alt="intro image" width={100} height={20}></img>
            </div>

            <p class="bodytext" data-aos="fade-up" data-aos-easing="linear">
                {introText.text1}
                <br />
                {introText.text2}
                <br />
                {introText.text3}
            </p>

            <span class="space40px"></span>
            <span class="space40px"></span>

            <div data-aos="fade-up" data-aos-easing="linear">
                <div class="nama-big">
                    Silvana
                </div>
                <div class="ampersand">&</div>
                <div class="nama-big">
                    Mathias
                </div>

            </div>
            <span class="space40px"></span>
            <div data-aos="fade-up" data-aos-easing="linear">
                <img src="../../19638.png" class="divider has-text-centered" alt="~~~" width={723} height={800}></img>
            </div>
            <span class="space40px"></span>
            <span class="space40px"></span>
        </section>
    )
});
