import { component$ } from '@builder.io/qwik'
import { inlineTranslate } from 'qwik-speak';

interface ItemProps {
    id: string;
}




// const imageEnd =  `${import.meta.env.BASE_URL}assets/blumen_schnitt.png`;


export const ProgramSection = component$<ItemProps>((props) => {
    const t = inlineTranslate();

    const programText = {
        title: t('app.program.title@@Programm'),
        text0: t('app.program.text0@@Ankunft / Begrüßung'),
        time0: t('app.program.time0@@ca. 15:00'),
        text1: t('app.program.text1@@Sektempfang'),
        time1: t('app.program.time1@@ca. 15:30'),
        text2: t('app.program.text2@@Gruppenfotos / Fotos'),
        time2: t('app.program.time2@@ca. 15:30 - 19:00'),
        text3: t('app.program.text3@@Kaffee und Kuchen'),
        time3: t('app.program.time3@@ca. 16:00'),
        text4: t('app.program.text4@@Alpakas / Lamas Besuch (für Kinder)'),
        time4: t('app.program.time4@@ca. 17:30'),
        text5: t('app.program.text5@@Kennenlernen / Spiele'),
        time5: t('app.program.time5@@ca. 18:00'),
        text6: t('app.program.text6@@Abendessen (Buffet)'),
        time6: t('app.program.time6@@ca. 19:00'),
        text7: t('app.program.text7@@Tanzen/Party'),
        time7: t('app.program.time7@@ca. 21:00'),
        text8: t('app.program.text8@@Ende'),
        time8: t('app.program.time8@@ca. 01:00')
    };

    return (
        <>

            <section class="section-color" id={props.id}>
                <div class="container">

                    <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                        <h1 class="title has-text-centered section-title">{programText.title}</h1>
                    </div>
                    <div class="columns is-multiline" data-aos="fade-up" data-aos-easing="linear">
                        <div class="column is-4 has-vertically-aligned-content">
                            <div class="date is-larger has-text-centered">
                                {programText.text0}
                                <br></br>
                                <strong>{programText.time0}</strong>
                            </div>

                        </div>

                        <div class="column is-4 has-vertically-aligned-content">

                            {/* <div class="date is-larger has-text-centered">
                            <div class="date has-text-centered">{timeText.date1}</div>
                            <div class="date date-num has-text-centered">{timeText.date2}</div>
                            <div class="date has-text-centered">{timeText.date3}</div>
                        </div> */}

                            <div class="date is-larger has-text-centered">
                                {programText.text1}
                                <br></br>
                                <strong>{programText.time1}</strong>
                            </div>

                        </div>
                        <div class="column is-4 has-vertically-aligned-content">

                            <div class="date is-larger has-text-centered">
                                {programText.text2}
                                <br></br>
                                <strong>{programText.time2}</strong>
                            </div>

                        </div>

                        <div class="column is-4 has-vertically-aligned-content">

                            <h1 class="date is-larger has-text-centered">
                                {programText.text3}
                                <br></br>
                                <strong>{programText.time3}</strong>
                            </h1>


                        </div>

                        <div class="column is-4 has-vertically-aligned-content">
                            <h1 class="date is-larger has-text-centered">
                                {programText.text4}
                                <br></br>
                                <strong>{programText.time4}</strong>
                            </h1>

                        </div>

                        <div class="column is-4 has-vertically-aligned-content">
                            <h1 class="date is-larger has-text-centered">
                                {programText.text5}
                                <br></br>
                                <strong>{programText.time5}</strong>
                            </h1>

                        </div>

                        <div class="column is-4 has-vertically-aligned-content">
                            <h1 class="date is-larger has-text-centered">
                                {programText.text6}
                                <br></br>
                                <strong>{programText.time6}</strong>
                            </h1>

                        </div>

                        <div class="column is-4 has-vertically-aligned-content">
                            <h1 class="date is-larger has-text-centered">
                                {programText.text7}
                                <br></br>
                                <strong>{programText.time7}</strong>
                            </h1>

                        </div>

                        <div class="column is-4 has-vertically-aligned-content">
                            <h1 class="date is-larger has-text-centered">
                                {programText.text8}
                                <br></br>
                                <strong>{programText.time8}</strong>
                            </h1>

                        </div>

                    </div>
                </div>


            </section>
            {/* <div>
                <img src={imageEnd} class="has-text-centered" alt="" width={496.46} height={100}></img>
            </div> */}
        </>
    )
});