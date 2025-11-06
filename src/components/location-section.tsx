import { component$ } from '@builder.io/qwik'

const locationText = {
    text1: 'B&O Parkhotel GmbH & Co. KG',
    text2: 'Dietrich-Bonhoeffer-Str. 31',
    text3: '83043 Bad Aibling'
}

const maps = {
    // TODO: frameSrc not working wen passed to src only with ""
    frameSrc: "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dietrich-Bonhoeffer-Str. 31,83043 Bad Aibling&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
    href: `https://www.google.com/maps/place/B%26O+Parkhotel/@47.8848412,11.9852204,17z/data=!3m1!4b1!4m9!3m8!1s0x47761d9b96514047:0x43265fbf4856ca61!5m2!4m1!1i2!8m2!3d47.8848412!4d11.9878007!16s%2Fg%2F1tp2z6d1?hl=en&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D`,
    title: 'Google Maps'
}

interface ItemProps {
    id: string;
}
export const LocationSection = component$<ItemProps>((props) => {
    return (
        <section class="section-darker" id={props.id}>
            <div class="container">
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <h1 class="title has-text-centered section-title">Ort</h1>
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
                        <iframe class="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                            src={maps.frameSrc}>
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
