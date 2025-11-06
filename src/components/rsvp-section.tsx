import { component$ } from '@builder.io/qwik'

interface ItemProps {
    id: string;
}

const rsvpText = {
    title: 'Songs senden',
    subtitle: `hsjhfsdk ...`,
    whatsappTitle1: `Informieren Sie CPW`,
    href1: 'https://api.whatsapp.com/send?phone=<number>&text=<text>&source=<source>&data=<data>',
    href2: 'https://api.whatsapp.com/send?phone=<number>&text=<text>&source=<source>&data=<data>',
    whatsappTitle2: `Oder CPP`
};


export const RsvpSection = component$<ItemProps>((props) => {
    return (
        <section class="section-dark contact" id={props.id}>
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-12 prolog">
                        <h1 class="title has-text-centered section-title" data-aos="fade-up" data-aos-easing="linear">{rsvpText.title}</h1>
                    </div>
                    <div class="column is-12 prolog has-text-centered" data-aos="fade-up" data-aos-easing="linear">
                        <p class="h2 subtitle">
                            {rsvpText.subtitle}
                        </p>

                        <a href={rsvpText.href1}
                            class="button btn-whatsapp" target="_blank" data-aos="zoom-in">
                            <i class="fab fa-whatsapp"></i>
                            &nbsp;&nbsp;{rsvpText.whatsappTitle1}
                        </a>



                        <a href={rsvpText.href2}
                            class="button btn-whatsapp" target="_blank" data-aos="zoom-in">
                            <i class="fab fa-whatsapp"></i>
                            &nbsp;&nbsp;{rsvpText.whatsappTitle2}
                        </a>
                        <div class="space40px"></div>

                        <div class="space40px"></div>
                        <div data-aos="fade-up" data-aos-easing="linear">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" class="divider has-text-centered" alt="~~~" width={60} height={60}></img>
                        </div>
                        <div class="space40px"></div>

                    </div>

                </div>
            </div>
        </section>
    )
});
