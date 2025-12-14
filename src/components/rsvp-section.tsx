import { $, component$, useSignal, useTask$ } from '@builder.io/qwik'
import { getItems } from '~/utils/utils';

interface ItemProps {
    id: string;
}
const mailBody = `Beispiel: \n Wir kommen und bringen ein Kind mit \n Einer von uns ist vegetarisch \n Song 1: `;
const rsvpText = {
    title: 'Teilnahme bestätigen',
    text1: `Bitte bestätigt uns per E-Mail, ob ihr an unserer Hochzeit teilnehmt.`,
    text2: `Gebt dabei auch an, ob ihr mit oder ohne Kinder kommt`,
    text3: `Teilt uns außerdem mit, ob ihr vegetarisch oder vegan essen möchtet oder ob es Allergien bzw. Unverträglichkeiten gibt.`,
    text4: 'Bitte sendet uns auch zwei Songs eurer Wahl, damit für alle etwas zum Tanzen geboten ist :-)',


    /* groupChat: 'https://chat.whatsapp.com/<id>?mode=wwt', */
    /* groupChatTitle: 'WhatsApp', */

    /* googleLink: 'https://forms.gle/<id>',
    googleLinkTitle: 'Google RSVP', */

    mailLink: `mailto:${mail}?subject=[Hochzeit%20RSVP]%20SilvanaYMathias&body=${mailBody}`,
    mailLinkTitle: 'Send E-Mail',


    href1: `https://api.whatsapp.com/send?phone=<number>&text=<text>&source=<source>&data=<data>`,
    whatsappTitle2: `WhatsApp`
};


export const RsvpSection = component$<ItemProps>((props) => {
    const link1 = useSignal("");
    const link2 = useSignal("");
    const { item1, item2 } = getItems();

    useTask$(() => {
        link1.value = rsvpText.href1.replace('<number>', item1);
    });

    const goToSite$ = $((v: 1 | 2) => {
        if (v === 1) {
            window.location.href = link1.value;
            // window.open('https://example.com', '_blank')
        } else {
            window.location.href = link2.value;
            // window.open('https://example.com', '_blank')
        }
    });
    return (
        <>
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

                            {/* <a href={link1.value}
                                class="button btn-whatsapp" target="_blank" data-aos="zoom-in">
                                <i class="fab fa-whatsapp"></i>
                                &nbsp;&nbsp;{rsvpText.groupChatTitle}
                            </a> */}

                            {/* <button onClick$={async () => { goToSite$(2) }} class="button btn-whatsapp" data-aos="zoom-in">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" class="pr-2" width={50} height={50}></img>
                                {rsvpText.whatsappTitle2}
                            </button> */}



                            {/* <a href={rsvpText.googleLink}
                                class="button btn-whatsapp" target="_blank" data-aos="zoom-in">
                                <i class="fab fa-whatsapp"></i>
                                &nbsp;&nbsp;{rsvpText.googleLinkTitle}
                            </a>*/}


                            <a href={rsvpText.mailLink}
                                /* button btn-whatsapp mail  */
                                class="button btn-cta" target="_blank" data-aos="zoom-in">
                                <i class="fab fa-whatsapp"></i>
                                &nbsp;&nbsp;{rsvpText.mailLinkTitle}
                            </a>


                            {/*
                            <div data-aos="fade-up" data-aos-easing="linear">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width={60} height={60}></img>
                            </div> */}

                        </div>

                    </div>
                </div>
            </section>
            {/* <section class="section-color bg-scolor-3">
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column is-12 prolog">
                            <h1 class="title has-text-centered section-title" data-aos="fade-up" data-aos-easing="linear">{songsText.title}</h1>
                        </div>
                        <div class="column is-12 prolog has-text-centered" data-aos="fade-up" data-aos-easing="linear">
                            <p class="h2 subtitle">
                                {songsText.subtitle}
                            </p>
                            <p class="h2 subtitle">
                                {songsText.subtitle2}
                            </p>

                            <button onClick$={async () => { goToSite$(2) }} class="button btn-whatsapp" data-aos="zoom-in">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" class="pr-2" width={50} height={50}></img>
                                {songsText.whatsappTitle2}
                            </button>

                            <a href={songsText.mailLink}
                                class="button btn-cta" target="_blank" data-aos="zoom-in">
                                <i class="fab fa-whatsapp"></i>
                                &nbsp;&nbsp;{rsvpText.mailLinkTitle}
                            </a>
                        </div>

                    </div>
                </div>
            </section> */}
        </>
    )
});
