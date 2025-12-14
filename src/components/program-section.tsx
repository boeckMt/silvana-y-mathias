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
        text1: t('app.program.text1@@Empfang'),
        time1: t('app.program.time1@@ca. 15:00'),
        text2: t('app.program.text2@@Kaffee und Kuchen'),
        time2: t('app.program.time2@@ca. 16:00'),
        text3: t('app.program.text3@@Abendessen'),
        time3: t('app.program.time3@@ca. 19:00'),
        text4: t('app.program.text4@@Tanzen/Party'),
        time4: t('app.program.time4@@ca. 21:00')
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

                    </div>
                </div>


            </section>
            {/* <div>
                <img src={imageEnd} class="has-text-centered" alt="" width={496.46} height={100}></img>
            </div> */}
        </>
    )
});