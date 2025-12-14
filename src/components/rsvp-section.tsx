import { component$ } from '@builder.io/qwik'
import { inlineTranslate } from 'qwik-speak';

interface ItemProps {
    id: string;
}



export const RsvpSection = component$<ItemProps>((props) => {
    const t = inlineTranslate();

    const mail = 'silvanaymathiaswedding@gmail.com';
    const mailSubject = t(`app.rsvp.mailsubject@@[Hochzeit RSVP] Silvana Y Mathias`);
    const mailBody = t(`app.rsvp.mailbody@@Beispiel: \n Wir kommen und bringen ein Kind mit \n Wir essen vegetarisch \n Song 1: \n Song 2:`);
    const rsvpText = {
        title: t(`app.rsvp.title@@Teilnahme bestätigen`),
        text1: t(`app.rsvp.text1@@Bitte bestätigt uns per E-Mail, ob ihr an unserer Hochzeit teilnehmt.`),
        text2: t(`app.rsvp.text2@@Gebt dabei auch an, ob ihr mit oder ohne Kinder kommt`),
        text3: t(`app.rsvp.text3@@Teilt uns außerdem mit, ob ihr vegetarisch oder vegan essen möchtet oder ob es Allergien bzw. Unverträglichkeiten gibt.`),
        text4: t(`app.rsvp.text4@@Bitte sendet uns auch zwei Songs eurer Wahl, damit die Tanzfläche bebt :-)`),

        mailLink: `mailto:${mail}?subject=${mailSubject}&body=${mailBody}`,
        mailLinkTitle: t(`app.rsvp.mailLink@@E-Mail Senden`)
    };


    return (
        <section class="section-color bg-color-3" id={props.id}>
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-12 prolog">
                        <h1 class="title has-text-centered section-title" data-aos="fade-up" data-aos-easing="linear">{rsvpText.title}</h1>
                    </div>
                    <div class="column is-12 prolog has-text-centered" data-aos="fade-up" data-aos-easing="linear">
                        <p class="h2">
                            {rsvpText.text1}
                        </p>
                        <br></br>
                        <p class="h2">
                            {rsvpText.text2}
                        </p>
                        <br></br>
                        <p class="h2">
                            {rsvpText.text3}
                        </p>
                        <br></br>
                        <p class="h2">
                            {rsvpText.text4}
                        </p>

                        <a href={rsvpText.mailLink}
                            /* button btn-whatsapp mail  */
                            class="button btn-cta" target="_blank" data-aos="zoom-in">
                            <i class="fab fa-whatsapp"></i>
                            &nbsp;&nbsp;{rsvpText.mailLinkTitle}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
});
