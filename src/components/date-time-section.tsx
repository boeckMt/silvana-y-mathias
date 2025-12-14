import { component$ } from '@builder.io/qwik'
import { inlineTranslate } from 'qwik-speak';

interface ItemProps {
    id: string;
}



export const DateTimeSection = component$<ItemProps>((props) => {
    const t = inlineTranslate();

    const timeText = {
        title: t('app.date.title@@Datum'),
        date1: t('app.date.date1@@Samstag'),
        date2: 25,
        date3: t('app.date.date3@@Juli 2026'),
        timeTitle: t('app.date.timeTitle@@Beginn:'),
        time: t('app.date.time@@ca. 15:00'),
        calendarHref: 'https://calendar.app.google/H688GXq2FSQuZkxt9',
        calendarTitle: t('app.date.calendar@@Google Calendar')
    };


    return (
        <section class="section-color bg-color-2" id={props.id}>
            <div class="container">

                <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                    <h1 class="title has-text-centered section-title">{timeText.title}</h1>
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
