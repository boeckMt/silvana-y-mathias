import { component$ } from '@builder.io/qwik';
import { inlineTranslate } from 'qwik-speak';

interface IimageCard {
    title: string;
    subtitle: string;
    src: string;
}

// https://qwik.dev/docs/integrations/image-optimization/
// TODO: fix VipsJpeg: Invalid SOS parameters for sequential JPEG
/* import Img20230519Wa0048 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20230519-WA0048.jpg?jsx';
import Img20230813WA0058 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20230813-WA0058.jpg?jsx';
import Img20231101WA0130 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20231101-WA0130.jpg?jsx';
import Img20231111WA0069 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20231111-WA0069.jpg?jsx';
import Img20231203WA0036 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20231203-WA0036.jpg?jsx';
import Img20240104WA0020 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20240104-WA0020.jpg?jsx';
import Img20240529WA0062 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20240529-WA0062.jpg?jsx';
import Img20240816WA0023 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20240816-WA0023.jpg?jsx';
import Img20250215WA0106 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20250215-WA0106.jpg?jsx';
import Img20250221WA0031 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20250221-WA0031.jpg?jsx';
import Img20250302WA0062 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20250302-WA0062.jpg?jsx';
import Img20250726WA0029 from '~/media/placeholderImg.jpg?jsx'; //'~/media/IMG-20250726-WA0029.jpg?jsx'; */


interface ItemProps {
    id: string;
}
export const ImageSection = component$<ItemProps>((props) => {
    const t = inlineTranslate();

    const sectionTitle = t('app.image.title@@Ein paar Bilder zu uns');
    const images: IimageCard[] = [
        {
            title: t('app.image.i1.title@@Mai 2023'),
            subtitle: t('app.image.i1.subtitle@@Erste gemeinsame Wanderung - Graseck Kochelsee'),
            // src: 'https://lh3.googleusercontent.com/d/1mSqjhF95Wqs0gas4w9xxyIjScUtvCKOS=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20230519-WA0048.jpg` // <Img20230519Wa0048></Img20230519Wa0048>
        },
        {
            title: t('app.image.i2.title@@August 2023'),
            subtitle: t('app.image.i2.subtitle@@Nächste Wanderung - Jochberg Walchensee'),
            // src: 'https://lh3.googleusercontent.com/d/1cOARtL-Le9Gyeeko71VUiv1-JGS-vxXZ=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20230813-WA0058.jpg`
        },
        {
            title: t('app.image.i3.title@@November 2023'),
            subtitle: t('app.image.i3.subtitle@@Noch eine Wanderung - Josefsthaler Wasserfälle'),
            // src: 'https://lh3.googleusercontent.com/d/1WS9Efk_kMSDi3eIM5U-GjdQ0QQYzS2sp=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20231101.jpg`
        },
        {
            title: t('app.image.i4.title@@November 2023'),
            subtitle: t('app.image.i4.subtitle@@Karneval Mainz'),
            // src: 'https://lh3.googleusercontent.com/d/1_RsOrsGMMzCuEZmI3XORREN2aW4YGjTw=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20231111-WA0069.jpg`
        },
        {
            title: t('app.image.i5.title@@Dezember 2023'),
            subtitle: t('app.image.i5.subtitle@@Viel Schnee in München'),
            // src: 'https://lh3.googleusercontent.com/d/16LCdDaOa7ulaodVerWT4Y0xSVQGmleTN=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20231203-WA0036.jpg`
        },
        {
            title: t('app.image.i6.title@@Januar 2024'),
            subtitle: t('app.image.i6.subtitle@@Snowboarden am Wilder Kaiser'),
            // src: 'https://lh3.googleusercontent.com/d/1rYZ7S5S6z31gFePpnNg3oUzOSTqUBWXU=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20240104-WA0020.jpg`
        },
        {
            title: t('app.image.i7.title@@Juni 2024'),
            subtitle: t('app.image.i7.subtitle@@Erstes mal gemeinsam in Peru - Silvi Familie'),
            // src: 'https://lh3.googleusercontent.com/d/1hVy0ZHczMtpIPjHKuPYPJnfr80uOWhwl=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20240611-WA0062.jpg`
        },
        {
            title: t('app.image.i8.title@@Juni 2024'),
            subtitle: t('app.image.i8.subtitle@@Erstes mal Pisco in Peru - Silvi Bruder'),
            // src: 'https://lh3.googleusercontent.com/d/1hVy0ZHczMtpIPjHKuPYPJnfr80uOWhwl=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20240530.jpg`
        },
        {
            title: t('app.image.i9.title@@September 2024'),
            subtitle: t('app.image.i9.subtitle@@Fahrrad fahren an der schönen Isar'),
            // src: 'https://lh3.googleusercontent.com/d/1nwud_2H0AMFjwkLiHMJRklck_11asGWo=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20240907.jpg`
        },
        {
            title: t('app.image.i10.title@@Februar 2025'),
            subtitle: t('app.image.i10.subtitle@@Zweites mal in Peru - Silvi Geburtstag'),
            // src: 'https://lh3.googleusercontent.com/d/1OcIt94203QGTxHZ0CLWMTbf7eMX5wZnM=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20250215-WA0106.jpg`
        },
        {
            title: t('app.image.i11.title@@Februar 2025'),
            subtitle: t(`app.image.i11.subtitle@@Leckere Jugo's trinken mit Silvis Pa`),
            // src: 'https://lh3.googleusercontent.com/d/1_GdH_ojsnaFcDQbUle8N7h3TUpttxIKM=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20250221-WA0031.jpg`
        },
        {
            title: t('app.image.i12.title@@März 2025'),
            subtitle: t('app.image.i12.subtitle@@Silvi bekommt einen Ring - Parque del Amor, Peru'),
            // src: 'https://lh3.googleusercontent.com/d/1_avnMruKAUll0sCovLZraPuG7iXISSrZ=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20250302-WA0062.jpg`
        },
        {
            title: t('app.image.i13.title@@April 2025'),
            subtitle: t('app.image.i13.subtitle@@Fahrradtour am Walchensee'),
            // src: 'https://lh3.googleusercontent.com/d/18LHHzGAgh7M7YTp_ciRzi1pS1mJhu2e_=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20250412.jpg`
        },
        {
            title: t('app.image.i14.title@@Juli 2025'),
            subtitle: t('app.image.i14.subtitle@@Erinnerungen an Peru Daheim beim Kochen'),
            // src: 'https://lh3.googleusercontent.com/d/18LHHzGAgh7M7YTp_ciRzi1pS1mJhu2e_=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20250726-WA0029.jpg`
        },
        {
            title: t('app.image.i15.title@@Oktober 2025'),
            subtitle: t('app.image.i15.subtitle@@Wärme tanken in Sizilien'),
            // src: 'https://lh3.googleusercontent.com/d/18LHHzGAgh7M7YTp_ciRzi1pS1mJhu2e_=s4000?authuser=0',
            src: `${import.meta.env.BASE_URL}assets/IMG-20251026.jpg`
        }
    ];

    const imageEnd = `${import.meta.env.BASE_URL}assets/brezen_unten.png?v=1`; //'https://lh3.googleusercontent.com/d/1D8LXL1zwOCXCJtFCbyizmWnhDMQiLWqN=s4000?authuser=0';

    return (
        <section class="section-color last regular-section is-fullheight" id={props.id}>
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column has-text-centered is-12 prolog">
                        <h1 class="title has-text-centered section-title" data-aos="fade-up" data-aos-easing="linear">
                            {sectionTitle}
                        </h1>

                        <div class="grid is-gap-3 is-row-gap-6 is-mobile is-col-min-16">
                            {images.map((item, index) => (
                                <div class="cell" key={`nav-item${index}`}>
                                    <article class="card" data-aos="fade-up" data-aos-easing="linear">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={item.src} loading="lazy" width={533} height={400} crossOrigin="anonymous" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="media-content">
                                                <p class="title is-6">{item.title}</p>
                                                <p class="subtitle is-size-6">{item.subtitle}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div class="column has-text-centered is-12 prolog mt-5">

                        <div>
                            <img src={imageEnd} loading="lazy" class="has-vertically-align" alt="" width={496.46} height={100}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});
