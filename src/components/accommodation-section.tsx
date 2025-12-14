import { component$ } from '@builder.io/qwik'
import { inlineTranslate } from 'qwik-speak'

interface ItemProps {
    id: string;
}
export const AccommodationSection = component$<ItemProps>((props) => {
    const t = inlineTranslate();


    const locationText = {
        text1: t('app.accommodation.location.text1@@Unterkunft'),
        text2: t('app.accommodation.location.text2@@Es gibt einige schöne Unterkünfte in der Nähe. Wir empfehlen euch das B&O Parkhotel, wo auch die Feier ist.'),
        text3: t('app.accommodation.location.text3@@Am besten reserviert ihr schon früh, damit ihr entspannt planen könnt.')
    }

    const accoAnd = t('app.accommodation.and@@und')
    const mapsText = t('app.accommodation.maps@@Google maps');
    const accoN1 = {
        text1: 'B&O Parkhotel',
        text2: 'Dietrich-Bonhoeffer-Straße 31, 83043 Bad Aibling',
        text3: t('app.accommodation.accoN1.text3@@Zimmer und Suiten'),
        text3Link: 'https://www.bo-parkhotel.de/zimmer-und-suiten/',
        kontakt: t('app.accommodation.accoN1.kontakt@@Kontakt'),
        kontaktLink: 'https://www.bo-parkhotel.de/kontakt',
        text4: t('app.accommodation.accoN1.text4@@Falls ihr euch für diese Option entscheidet, es gibt ein Zimmer Kontingent unter dem Stichwort'),
        text5: t(`app.accommodation.accoN1.text5@@'Hochzeit Mendoza Böck'`)
    }

    const accoN2 = {
        text1: 'Gasthof Kriechbaumer',
        text2: 'Ebersberger Straße 72, 83043 Bad Aibling',
        text3: t('app.accommodation.accoN2.text3@@Zimmer'),
        text3Link: 'https://www.gasthof-kriechbaumer.de/index.php/zimmer',
        kontakt: t('app.accommodation.accoN2.kontakt@@Kontakt'),
        kontaktLink: 'https://www.gasthof-kriechbaumer.de/index.php/contact',
        text4: t('app.accommodation.accoN2.text4@@Entfernung zur Location: Mit dem Auto ca. 3 min, zu Fuß ca. 15 min'),
        glink: 'https://maps.app.goo.gl/pH1qT5aDW2HqzVbm6'
    }

    const accoN3 = {
        text1: 'Heufelder Hof',
        text2: 'Waldheimer Str. 6a, 83052 Bruckmühl',
        text3: t('app.accommodation.accoN3.text3@@Zimmer'),
        text3Link: 'https://heufelderhof.de/zimmer-und-preise/',
        kontakt: t('app.accommodation.accoN3.kontakt@@Kontakt'),
        kontaktLink: 'https://heufelderhof.de/kontakt/',
        text4: t('app.accommodation.accoN3.text4@@Entfernung zur Location: Mit dem Auto ca. 6 min, zu Fuß ca. 40 min'),
        glink: 'https://maps.app.goo.gl/3sarqt5WNn8Skp2g7'
    }

    const accoN4 = {
        text1: 'Hotel Johannisbad',
        text2: 'Rosenheimer Str. 45, 83043 Bad Aibling',
        text3: t('app.accommodation.accoN4.text3@@Zimmer'),
        text3Link: 'https://www.hoteljohannisbad.de/zimmer',
        kontakt: t('app.accommodation.accoN4.kontakt@@Kontakt'),
        kontaktLink: 'https://www.hoteljohannisbad.de/kontakt',
        text4: t('app.accommodation.accoN4.text4@@Entfernung zur Location: Mit dem Auto ca. 7 min, zu Fuß ca. 54 min'),
        glink: 'https://maps.app.goo.gl/h7rDJwPKXienJf4A6'
    }

    const accoN5 = {
        text1: 'Wohnmobil- und Wohnwagenstellplatz',
        text2: 'Parkplatz, Parking lot, 83043 Bad Aibling',
        kontakt: t('app.accommodation.accoN5.kontakt@@Kontakt'),
        kontaktLink: 'https://www.bad-aibling.de/poi/wohnmobilstellplatz-therme',
        text4: t('app.accommodation.accoN5.text4@@Entfernung zur Location: Mit dem Auto ca. 8 min, zu Fuß ca. 58 min'),
        glink: 'https://maps.app.goo.gl/5DApPvEX9N1A34F86'
    }

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
                        <strong class="is-size-5">{accoN1.text1}</strong>
                        <p>
                            {accoN1.text2}
                        </p>

                        <p class="mt-2">
                            {accoN1.text4} <span class="has-text-weight-semibold">{accoN1.text5}</span>
                        </p>
                        <p class="mt-2">
                            <a href={accoN1.text3Link} target='_blank' class="link-in-text">{accoN1.text3}</a>
                        </p>
                        <p>
                            <a href={accoN1.kontaktLink} target='_blank' class="link-in-text">{accoN1.kontakt}</a>
                        </p>
                    </div>
                </div>


                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <div class="location is-larger has-text-centered">
                        <strong class="is-size-5">{accoN2.text1}</strong>
                        <p>
                            {accoN2.text2}
                        </p>
                        <p>
                            {accoN2.text4}
                        </p>
                        <p class="mt-2">
                            <a href={accoN2.text3Link} target='_blank' class="link-in-text">{accoN2.text3}</a> {accoAnd} <a href={accoN2.kontaktLink} target='_blank' class="link-in-text">{accoN2.kontakt}</a>
                        </p>
                        <p class="mt-2">
                            <a href={accoN2.glink} target='_blank' class="link-in-text">{mapsText}</a>
                        </p>
                    </div>
                </div>


                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <div class="location is-larger has-text-centered">
                        <strong class="is-size-5">{accoN3.text1}</strong>
                        <p>
                            {accoN3.text2}
                        </p>
                        <p>
                            {accoN3.text4}
                        </p>

                        <p class="mt-2">
                            <a href={accoN3.text3Link} target='_blank' class="link-in-text">{accoN3.text3}</a> {accoAnd} <a href={accoN3.kontaktLink} target='_blank' class="link-in-text">{accoN3.kontakt}</a>
                        </p>
                        <p class="mt-2">
                            <a href={accoN3.glink} target='_blank' class="link-in-text">{mapsText}</a>
                        </p>
                    </div>
                </div>


                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <div class="location is-larger has-text-centered">
                        <strong class="is-size-5">{accoN4.text1}</strong>
                        <p>
                            {accoN4.text2}
                        </p>
                        <p>
                            {accoN4.text4}
                        </p>
                        <p class="mt-2">
                            <a href={accoN4.text3Link} target='_blank' class="link-in-text">{accoN4.text3}</a> {accoAnd} <a href={accoN4.kontaktLink} target='_blank' class="link-in-text">{accoN4.kontakt}</a>
                        </p>
                        <p class="mt-2">
                            <a href={accoN4.glink} target='_blank' class="link-in-text">{mapsText}</a>
                        </p>
                    </div>
                </div>


                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <div class="location is-larger has-text-centered">
                        <strong class="is-size-5">{accoN5.text1}</strong>
                        <p>
                            {accoN5.text2}
                        </p>
                        <p>
                            {accoN5.text4}
                        </p>

                        <p class="mt-2">
                            <a href={accoN5.kontaktLink} target='_blank' class="link-in-text">{accoN5.kontakt}</a>
                        </p>
                        <p class="mt-2">
                            <a href={accoN5.glink} target='_blank' class="link-in-text">{mapsText}</a>
                        </p>

                    </div>
                </div>


            </div>
        </section>
    )
});
