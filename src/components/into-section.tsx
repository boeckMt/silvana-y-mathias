import { component$ } from '@builder.io/qwik'

interface ItemProps {
    id: string;
}

const imageTop = 'https://photos.google.com/share/AF1QipMVvn4wb8o9qkuKJdbTrIDhGmc_2ocsVP_rCtVX4RRGEeFWj5G5jn772KqbNbODaA/photo/AF1QipNrCS_TcfRsu8BJZ3K7XEeuuvFqJBt1Vpzl9x1k?key=OVB5b01OZ2ZmeXlXVEhIaFQ5VG15M3dXMDdVdTVB';
const imageEnd = 'https://photos.google.com/share/AF1QipO6fJkuBhha6iaFM9bn-dS9X4nGuCtJw0vDpZ1V4Ex6a0U-irHw1Yv1A2ezMZ8uIg/photo/AF1QipN0txOdkA9qvnr5rSROQ8FajksIVDTf242AV58Z?key=Yl85MjVBYWR3YUl5OHBpa2RkV0J5dDlMa0RiaS1n';

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
                <img src={imageTop} class="intro-image has-text-centered" alt="intro image" width={100} height={20}></img>
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
                <img src={imageEnd} class="divider has-text-centered" alt="~~~" width={496.46} height={100}></img>
            </div>
            <span class="space40px"></span>
            <span class="space40px"></span>
        </section>
    )
});
