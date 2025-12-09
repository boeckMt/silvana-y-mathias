import { component$ } from '@builder.io/qwik'

interface ItemProps {
    id: string;
}

const timeText = {
    date1: 'Samstag',
    date2: 25,
    date3: 'Juli 2026',
    timeTitle: 'Beginn:',
    time: 'ca. 15:00',
    calendarHref: 'https://calendar.app.google/<id>',
    calendarTitle: 'Google Calendar'
};


export const DateTimeSection = component$<ItemProps>((props) => {
    return (
        <section class="section-color color-2" id={props.id}>
            <div class="container">

                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <h1 class="title has-text-centered section-title">Datum</h1>
                </div>
                <div class="columns is-multiline" data-aos="fade-up" data-aos-easing="linear">
                    <div class="column is-6 has-vertically-aligned-content">

                        <div class="is-larger has-text-centered">
                            <div class="date has-text-centered">{timeText.date1}</div>
                            <div class="date date-num has-text-centered">{timeText.date2}</div>
                            <div class="date has-text-centered">{timeText.date3}</div>
                        </div>

                    </div>
                    <div class="column is-6 has-vertically-aligned-content">

                        <div class="date is-larger has-text-centered">
                            {timeText.timeTitle}
                            <br></br>
                            <strong>{timeText.time}</strong>
                        </div>

                    </div>
                </div>

            <div class="space40px"></div>
            <div class="has-text-centered" data-aos="fade-up" data-aos-easing="linear">
                <a href={timeText.calendarHref} target="_blank" class="button has-tooltip btn-cta"
                    data-tooltip="Add to Calendar" data-aos="zoom-in">
                    <i class="far fa-calendar-plus"></i>
                    &nbsp;&nbsp;{timeText.calendarTitle}
                </a>
            </div>
            </div>
            
        </section>
    )
});
