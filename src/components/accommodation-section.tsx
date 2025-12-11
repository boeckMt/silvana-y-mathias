import { component$ } from '@builder.io/qwik'

const locationText = {
    text1: 'Unterkunft',
    text2: 'Es gibt einige schöne Unterkünfte in der Nähe. Wir empfehlen euch das B&O Parkhotel.',
    text3: 'Am besten reserviert ihr schon früh, damit ihr entspannt planen könnt.'
}

const Accommodation1 = {
    text1: 'B&O Parkhotel',
    text2: 'Dietrich-Bonhoeffer-Straße 31, 83043 Bad Aibling',
    text3: 'Zimmer und Suiten',
    text3Link: 'https://www.bo-parkhotel.de/zimmer-und-suiten/',
    kontakt: 'Kontakt',
    kontaktLink: 'https://www.bo-parkhotel.de/kontakt',
    text4: 'Falls ihr euch für diese Option entscheidet, gebt frühzeitig bescheid, da es ein Zimmer Kontingent gibt.'
}

const Accommodation2 = {
    text1: 'Gasthof Kriechbaumer',
    text2: 'Ebersberger Straße 72, 83043 Bad Aibling',
    text3: 'Zimmer',
    text3Link: 'https://www.gasthof-kriechbaumer.de/index.php/zimmer',
    kontakt: 'Kontakt',
    kontaktLink: 'https://www.gasthof-kriechbaumer.de/index.php/contact',
    text4: 'Mit dem Auto 3 min, zu Fuß 15 min',
}

const Accommodation3 = {
    text1: 'Heufelder Hof',
    text2: 'Waldheimer Str. 6a, 83052 Bruckmühl',
    text3: 'Zimmer',
    text3Link: 'https://heufelderhof.de/zimmer-und-preise/',
    kontakt: 'Kontakt',
    kontaktLink: 'https://heufelderhof.de/kontakt/',
    text4: 'Mit dem Auto 6 min, zu Fuß 40 min',
}

const Accommodation4 = {
    text1: 'Hotel Johannisbad',
    text2: 'Rosenheimer Str. 45, 83043 Bad Aibling',
    text3: 'Zimmer',
    text3Link: 'https://www.hoteljohannisbad.de/zimmer',
    kontakt: 'Kontakt',
    kontaktLink: 'https://www.hoteljohannisbad.de/kontakt',
    text4: 'Mit dem Auto 7 min, zu Fuß 54 min',
}

const Accommodation5 = {
    text1: 'Wohnmobil- und Wohnwagenstellplatz',
    text2: 'Parkplatz, Parking lot, 83043 Bad Aibling',
    kontakt: 'Kontakt',
    kontaktLink: 'https://www.bad-aibling.de/poi/wohnmobilstellplatz-therme',
    text4: 'Mit dem Auto 8 min, zu Fuß 58 min',
}

interface ItemProps {
    id: string;
}
export const AccommodationSection = component$<ItemProps>((props) => {
    return (
        <section class="section-color" id={props.id}>
            <div class="container">
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <h1 class="title has-text-centered section-title">{locationText.text1}</h1>
                    <p class="location is-larger has-text-centered">
                        {locationText.text2}
                        <br></br>
                        {locationText.text3}
                    </p>

                    <p class="location is-larger has-text-centered">
                        
                    </p>
                </div>



                <div class="space40px"></div>
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <p class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation1.text1}</strong>
                        <br></br>
                        {Accommodation1.text2}
                        <br></br>
                        <a href={Accommodation1.text3Link} target='_blank'>{Accommodation1.text3}</a>
                        <br></br>
                        <a href={Accommodation1.kontaktLink} target='_blank'>{Accommodation1.kontakt}</a>
                        <br></br>
                        {Accommodation1.text4}
                        <br></br>
                    </p>
                </div>


                <div class="space40px"></div>
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <p class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation2.text1}</strong>
                        <br></br>
                        {Accommodation2.text2}
                        <br></br>
                        <a href={Accommodation2.text3Link} target='_blank'>{Accommodation2.text3}</a>
                        <br></br>
                        <a href={Accommodation2.kontaktLink} target='_blank'>{Accommodation2.kontakt}</a>
                        <br></br>
                        {Accommodation2.text4}
                        <br></br>
                    </p>
                </div>

                <div class="space40px"></div>
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <p class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation3.text1}</strong>
                        <br></br>
                        {Accommodation3.text2}
                        <br></br>
                        <a href={Accommodation3.text3Link} target='_blank'>{Accommodation3.text3}</a>
                        <br></br>
                        <a href={Accommodation3.kontaktLink} target='_blank'>{Accommodation3.kontakt}</a>
                        <br></br>
                        {Accommodation3.text4}
                        <br></br>
                    </p>
                </div>


                <div class="space40px"></div>
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <p class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation4.text1}</strong>
                        <br></br>
                        {Accommodation4.text2}
                        <br></br>
                        <a href={Accommodation4.text3Link} target='_blank'>{Accommodation4.text3}</a>
                        <br></br>
                        <a href={Accommodation4.kontaktLink} target='_blank'>{Accommodation4.kontakt}</a>
                        <br></br>
                        {Accommodation4.text4}
                        <br></br>
                    </p>
                </div>


                <div class="space40px"></div>
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <p class="location is-larger has-text-centered">
                        <strong class="is-size-5">{Accommodation5.text1}</strong>
                        <br></br>
                        {Accommodation5.text2}
                        <br></br>
                        <a href={Accommodation5.kontaktLink} target='_blank'>{Accommodation5.kontakt}</a>
                        <br></br>
                        {Accommodation5.text4}
                        <br></br>
                    </p>
                </div>


            </div>
        </section>
    )
});
