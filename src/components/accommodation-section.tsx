import { component$ } from '@builder.io/qwik'

const locationText = {
    text1: 'B&O Parkhotel GmbH & Co. KG',
    text2: 'Option 2',
    text3: 'Option 3 Camping?',
    text4: 'Schlafen in der Region'
}

interface ItemProps {
    id: string;
}
export const AccommodationSection = component$<ItemProps>((props) => {
    return (
        <section class="section-color-2" id={props.id}>
            <div class="container">
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <h1 class="title has-text-centered section-title">Unterkunft</h1>
                    <p class="location is-larger has-text-centered">
                        <strong>Es gibt mehrere Übernachtungsmöglichkeiten:</strong>
                    </p>
                </div>



                <div class="space40px"></div>
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <p class="location is-larger has-text-centered">
                        <strong>{locationText.text1}</strong>
                        <br></br>
                        <a href='https://www.bo-parkhotel.de/zimmer-und-suiten/' target='_blank'>Zimmer und Suiten</a>
                        <br></br>

                        <br></br>
                    </p>
                </div>


                <div class="space40px"></div>
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <p class="location is-larger has-text-centered">
                        <strong>{locationText.text2}</strong>
                        <br></br>
                        <a  target='_blank'>Zimmer und Suiten</a>
                        <br></br>

                        <br></br>
                    </p>
                </div>

                <div class="space40px"></div>
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <p class="location is-larger has-text-centered">
                        <strong>{locationText.text3}</strong>
                        <br></br>
                        <a  target='_blank'>Zimmer und Suiten</a>
                        <br></br>

                        <br></br>
                    </p>
                </div>

                <div class="space40px"></div>
                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <p class="location is-larger has-text-centered">
                        <strong>{locationText.text4}</strong>
                        <br></br>
                        <a  target='_blank'>Zimmer und Suiten</a>
                        <br></br>

                        <br></br>
                    </p>
                </div>
            </div>
        </section>
    )
});
