import { component$ } from '@builder.io/qwik'

interface ItemProps {
    id: string;
}

const timeText = {
    date1: 'Empfang',
    date2: 'ca. 15:00',
    timeTitle: 'KAFFEE UND KUCHEN',
    time: 'ca. 16:00',
    timeTitle2: 'Abendessen',
    time2: 'ca. 19:00 - 21:00',
    timeTitle3: 'Tanzen/Party',
    time3: 'ca. 21:00 - 1:00',
};


// const imageEnd =  `${import.meta.env.BASE_URL}assets/blumen_schnitt.png`;


export const ProgrammSection = component$<ItemProps>((props) => {
    return (
        <>

            <section class="section-color" id={props.id}>
                <div class="container">

                    <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                        <h1 class="title has-text-centered section-title">Programm</h1>
                    </div>
                    <div class="columns is-multiline" data-aos="fade-up" data-aos-easing="linear">
                        <div class="column is-4 has-vertically-aligned-content">

                            {/* <div class="date is-larger has-text-centered">
                            <div class="date has-text-centered">{timeText.date1}</div>
                            <div class="date date-num has-text-centered">{timeText.date2}</div>
                            <div class="date has-text-centered">{timeText.date3}</div>
                        </div> */}

                            <div class="date is-larger has-text-centered">
                                {timeText.date1}
                                <br></br>
                                <strong>{timeText.date2}</strong>
                            </div>

                        </div>
                        <div class="column is-4 has-vertically-aligned-content">

                            <div class="date is-larger has-text-centered">
                                {timeText.timeTitle}
                                <br></br>
                                <strong>{timeText.time}</strong>
                            </div>

                        </div>

                        <div class="column is-4 has-vertically-aligned-content">

                            <h1 class="date is-larger has-text-centered">
                                {timeText.timeTitle2}
                                <br></br>
                                <strong>{timeText.time2}</strong>
                            </h1>


                        </div>

                        <div class="column is-4 has-vertically-aligned-content">

                            <h1 class="date is-larger has-text-centered">
                                {timeText.timeTitle3}
                                <br></br>
                                <strong>{timeText.time3}</strong>
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