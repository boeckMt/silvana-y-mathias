import { component$ } from '@builder.io/qwik'

const locationText = {
    text1: 'B&O Parkhotel GmbH & Co. KG',
    text2: 'Dietrich-Bonhoeffer-Str. 31',
    text3: '83043 Bad Aibling'
}

/* const locationText2 = {
    text1: 'Anreise mit dem Auto',
    text2: 'Anreise mit den Öffentlichen'
} */

const maps = {
    frameSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.6635369899664!2d11.985220412515773!3d47.88484117109674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47761d9b96514047%3A0x43265fbf4856ca61!2sB%26O%20Parkhotel!5e0!3m2!1sde!2sde!4v1762608686782!5m2!1sde!2sde",
    href: `https://www.google.com/maps/place/B%26O+Parkhotel/@47.8848412,11.9852204,17z/data=!3m1!4b1!4m9!3m8!1s0x47761d9b96514047:0x43265fbf4856ca61!5m2!4m1!1i2!8m2!3d47.8848412!4d11.9878007!16s%2Fg%2F1tp2z6d1?hl=en&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D`,
    title: 'Google Maps'
}

interface ItemProps {
    id: string;
}
export const LocationSection = component$<ItemProps>((props) => {
    return (
        <section class="section-color-2" id={props.id}>
            <div class="container">
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <h1 class="title has-text-centered section-title">Anreise</h1>
                    <p class="location is-larger has-text-centered">
                        <strong>{locationText.text1}</strong>
                        <br></br>
                        {locationText.text2}
                        <br></br>
                        {locationText.text3}
                        <br></br>
                    </p>
                </div>

                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe 
                           /** @ts-expect-error - referrerpolicy is not supported everywhere */
                           src={maps.frameSrc} width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div class="space40px"></div>
                <div class="has-text-centered" data-aos="fade-up" data-aos-easing="linear">
                    <a href={maps.href}
                        class="button btn-cta" target="_blank" data-aos="zoom-in">
                        <i class="far fa-directions"></i>
                        &nbsp;&nbsp;{maps.title}
                    </a>
                </div>
            </div>
        </section>
    )
});
