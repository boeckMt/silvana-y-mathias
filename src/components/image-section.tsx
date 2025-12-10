import { component$ } from '@builder.io/qwik';

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


const sectionTitle = 'Ein paar Bilder zu uns';
const images: IimageCard[] = [
    {
        title: 'Mai 2023',
        subtitle: 'Unsere erste gemainsame Wanderung - Graseck Kochelsee',
        src: 'https://lh3.googleusercontent.com/d/1mSqjhF95Wqs0gas4w9xxyIjScUtvCKOS=s4000?authuser=0',
        // src: 'IMG-20230519-WA0048.jpg' // <Img20230519Wa0048></Img20230519Wa0048>
    },
    {
        title: 'August 2023',
        subtitle: '... Wanderung - Jochberg Walchensee',
        src: 'https://lh3.googleusercontent.com/d/1cOARtL-Le9Gyeeko71VUiv1-JGS-vxXZ=s4000?authuser=0',
        // src: 'IMG-20230813-WA0058.jpg'
    },
    {
        title: 'November 2023',
        subtitle: 'Wanderung Josefsthaler Wasserfälle',
        src: 'https://lh3.googleusercontent.com/d/1WS9Efk_kMSDi3eIM5U-GjdQ0QQYzS2sp=s4000?authuser=0',
        // src: 'IMG-20231101-WA0130.jpg'
    },
    {
        title: 'November 2023',
        subtitle: 'Karneval Mainz',
        src: 'https://lh3.googleusercontent.com/d/1_RsOrsGMMzCuEZmI3XORREN2aW4YGjTw=s4000?authuser=0',
        // src: 'IMG-20231111-WA0069.jpg'
    },
    {
        title: 'Dezember 2023',
        subtitle: 'Viel Schnee in München',
        src: 'https://lh3.googleusercontent.com/d/16LCdDaOa7ulaodVerWT4Y0xSVQGmleTN=s4000?authuser=0',
        // src: 'IMG-20231203-WA0036.jpg'
    },
    {
        title: 'Jannuar 2024',
        subtitle: 'Snowboarden Wilder Kaiser',
        src: 'https://lh3.googleusercontent.com/d/1rYZ7S5S6z31gFePpnNg3oUzOSTqUBWXU=s4000?authuser=0',
        // src: 'IMG-20240104-WA0020.jpg'
    },
    {
        title: 'Mai 2024',
        subtitle: 'Erstes mal gemeinsam in Peru - Silvi Familie',
        src: 'https://lh3.googleusercontent.com/d/1hVy0ZHczMtpIPjHKuPYPJnfr80uOWhwl=s4000?authuser=0',
        // src: '20240512_170041.jpg'
    },
    {
        title: 'August 2024',
        subtitle: '... ',
        src: 'https://lh3.googleusercontent.com/d/1nwud_2H0AMFjwkLiHMJRklck_11asGWo=s4000?authuser=0',
        // src: 'IMG-20240816-WA0023.jpg'
    },
    {
        title: 'Februar 2025',
        subtitle: 'Zweites mal in Peru - Silvi Geburtstag',
        src: 'https://lh3.googleusercontent.com/d/1OcIt94203QGTxHZ0CLWMTbf7eMX5wZnM=s4000?authuser=0',
        // src: 'IMG-20250215-WA0106.jpg'
    },
    {
        title: 'Februar 2025',
        subtitle: `Leckere Jugo's mit Silvis Pa`,
        src: 'https://lh3.googleusercontent.com/d/1_GdH_ojsnaFcDQbUle8N7h3TUpttxIKM=s4000?authuser=0',
        // src: 'IMG-20250221-WA0031.jpg'
    },
    {
        title: 'März 2025',
        subtitle: 'Silvi bekommt einen Ring in Peru',
        src: 'https://lh3.googleusercontent.com/d/1_avnMruKAUll0sCovLZraPuG7iXISSrZ=s4000?authuser=0',
        // src: 'IMG-20250302-WA0062.jpg'
    },
    {
        title: 'Juli 2025<',
        subtitle: 'Erinnerungen an Peru Daheim beim Kochen',
        src: 'https://lh3.googleusercontent.com/d/18LHHzGAgh7M7YTp_ciRzi1pS1mJhu2e_=s4000?authuser=0',
        // src: 'IMG-20250726-WA0029.jpg'
    }
];

/* images.forEach(i =>{
    i.src = 'placeholderImg.jpg';
}) */

const imageEnd = 'https://lh3.googleusercontent.com/d/1D8LXL1zwOCXCJtFCbyizmWnhDMQiLWqN=s4000?authuser=0';



interface ItemProps {
    id: string;
}
export const ImageSection = component$<ItemProps>((props) => {
    return (
        <section class="section-color regular-section is-fullheight" id={props.id}>
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
                                                <img src={item.src} width={533} height={400} crossOrigin="anonymous" />
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


                        <div class="space40px"></div>
                        <div data-aos="fade-up" data-aos-easing="linear">
                            <img src={imageEnd} class="divider has-vertically-align" alt="" width={496.46} height={100}></img>
                        </div>
                        <div class="space40px"></div>
                        <div class="space40px"></div>
                    </div>
                </div>
            </div>
        </section>
    )
});
