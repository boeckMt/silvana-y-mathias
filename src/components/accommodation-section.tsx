import { component$ } from '@builder.io/qwik'

const locationText = {
    text1: 'Unterkunft',
    text2: 'Es gibt einige schöne Unterkünfte in der Nähe. Wir empfehlen euch das B&O Parkhotel, wo auch die Feier ist.',
    text3: 'Am besten reserviert ihr schon früh, damit ihr entspannt planen könnt.'
}

const Accommodation1 = {
    text1: 'B&O Parkhotel',
    text2: 'Dietrich-Bonhoeffer-Straße 31, 83043 Bad Aibling',
    text3: 'Zimmer und Suiten',
    text3Link: 'https://www.bo-parkhotel.de/zimmer-und-suiten/',
    kontakt: 'Kontakt',
    kontaktLink: 'https://www.bo-parkhotel.de/kontakt',
    text4: 'Falls ihr euch für diese Option entscheidet, es gibt ein Zimmer Kontingent unter dem Stichwort',
    text5: `'Hochzeit Mendoza Böck'`
}

const Accommodation2 = {
    text1: 'Gasthof Kriechbaumer',
    text2: 'Ebersberger Straße 72, 83043 Bad Aibling',
    text3: 'Zimmer',
    text3Link: 'https://www.gasthof-kriechbaumer.de/index.php/zimmer',
    kontakt: 'Kontakt',
    kontaktLink: 'https://www.gasthof-kriechbaumer.de/index.php/contact',
    text4: 'Entfernung zur Location: Mit dem Auto ca. 3 min, zu Fuß ca. 15 min',
    glink: 'https://maps.app.goo.gl/pH1qT5aDW2HqzVbm6'
}

const Accommodation3 = {
    text1: 'Heufelder Hof',
    text2: 'Waldheimer Str. 6a, 83052 Bruckmühl',
    text3: 'Zimmer',
    text3Link: 'https://heufelderhof.de/zimmer-und-preise/',
    kontakt: 'Kontakt',
    kontaktLink: 'https://heufelderhof.de/kontakt/',
    text4: 'Entfernung zur Location: Mit dem Auto ca. 6 min, zu Fuß ca. 40 min',
    glink: 'https://maps.app.goo.gl/3sarqt5WNn8Skp2g7'
}

const Accommodation4 = {
    text1: 'Hotel Johannisbad',
    text2: 'Rosenheimer Str. 45, 83043 Bad Aibling',
    text3: 'Zimmer',
    text3Link: 'https://www.hoteljohannisbad.de/zimmer',
    kontakt: 'Kontakt',
    kontaktLink: 'https://www.hoteljohannisbad.de/kontakt',
    text4: 'Entfernung zur Location: Mit dem Auto ca. 7 min, zu Fuß ca. 54 min',
    glink: 'https://maps.app.goo.gl/h7rDJwPKXienJf4A6'
}

const Accommodation5 = {
    text1: 'Wohnmobil- und Wohnwagenstellplatz',
    text2: 'Parkplatz, Parking lot, 83043 Bad Aibling',
    kontakt: 'Kontakt',
    kontaktLink: 'https://www.bad-aibling.de/poi/wohnmobilstellplatz-therme',
    text4: 'Entfernung zur Location: Mit dem Auto ca. 8 min, zu Fuß ca. 58 min',
    glink: 'https://maps.app.goo.gl/5DApPvEX9N1A34F86'
}

interface ItemProps {
    id: string;
}
export const AccommodationSection = component$<ItemProps>((props) => {
    return (
        <section class="section-color bg-color-1" id={props.id}>
            <div class="container">
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <h1 class="title has-text-centered section-title">{locationText.text1}</h1>
                    <p class="is-larger has-text-centered my-2">
                        {locationText.text2}
                    </p>
                    <p class="location is-larger has-text-centered">
                        {locationText.text3}
                    </p>
                </div>


                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <div class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation1.text1}</strong>
                        <p>
                            {Accommodation1.text2}
                        </p>

                        <p class="mt-2">
                            {Accommodation1.text4} <span class="has-text-weight-semibold">{Accommodation1.text5}</span>
                        </p>
                        <p class="mt-2">
                            <a href={Accommodation1.text3Link} target='_blank' class="link-in-text">{Accommodation1.text3}</a>
                        </p>
                        <p>
                            <a href={Accommodation1.kontaktLink} target='_blank' class="link-in-text">{Accommodation1.kontakt}</a>
                        </p>
                    </div>
                </div>


                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <div class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation2.text1}</strong>
                        <p>
                            {Accommodation2.text2}
                        </p>
                        <p>
                            {Accommodation2.text4}
                        </p>
                        <p class="mt-2">
                            <a href={Accommodation2.text3Link} target='_blank' class="link-in-text">{Accommodation2.text3}</a> und <a href={Accommodation2.kontaktLink} target='_blank' class="link-in-text">{Accommodation2.kontakt}</a>
                        </p>
                        <p class="mt-2">
                            <a href={Accommodation2.glink} target='_blank' class="link-in-text">Google maps</a>
                        </p>
                    </div>
                </div>


                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <div class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation3.text1}</strong>
                        <p>
                            {Accommodation3.text2}
                        </p>
                        <p>
                            {Accommodation3.text4}
                        </p>

                        <p class="mt-2">
                            <a href={Accommodation3.text3Link} target='_blank' class="link-in-text">{Accommodation3.text3}</a> und <a href={Accommodation3.kontaktLink} target='_blank' class="link-in-text">{Accommodation3.kontakt}</a>
                        </p>
                        <p class="mt-2">
                            <a href={Accommodation3.glink} target='_blank' class="link-in-text">Google maps</a>
                        </p>
                    </div>
                </div>


                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <div class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation4.text1}</strong>
                        <p>
                            {Accommodation4.text2}
                        </p>
                        <p>
                            {Accommodation4.text4}
                        </p>
                        <p class="mt-2">
                            <a href={Accommodation4.text3Link} target='_blank' class="link-in-text">{Accommodation4.text3}</a> und <a href={Accommodation4.kontaktLink} target='_blank' class="link-in-text">{Accommodation4.kontakt}</a>
                        </p>
                        <p class="mt-2">
                            <a href={Accommodation4.glink} target='_blank' class="link-in-text">Google maps</a>
                        </p>
                    </div>
                </div>


                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <div class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation5.text1}</strong>
                        <p>
                            {Accommodation5.text2}
                        </p>
                        <p>
                            {Accommodation5.text4}
                        </p>

                        <p class="mt-2">
                            <a href={Accommodation5.kontaktLink} target='_blank' class="link-in-text">{Accommodation5.kontakt}</a>
                        </p>
                        <p class="mt-2">
                            <a href={Accommodation5.glink} target='_blank' class="link-in-text">Google maps</a>
                        </p>

                    </div>
                </div>


            </div>
        </section>
    )
});
