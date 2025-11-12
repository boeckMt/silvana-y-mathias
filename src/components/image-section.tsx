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
        src: 'https://lh3.googleusercontent.com/pw/AP1GczNxV0kEaasZ4XSVk7n-8RFER91ZmKrgSldjMUpiiJwlVIfVr7j9moRJ6yVD2_ofRcTqi4hk6JJdR8UAeHMWoMYahx0ZcoAj__pEQcL5SQNA8Qaj711fvi0XwqrV9tHfkmqjAIOSMENYMNrdssV7taV3=w1824-h1368-s-no-gm?authuser=0',
        // src: 'IMG-20230519-WA0048.jpg' // <Img20230519Wa0048></Img20230519Wa0048>
    },
    {
        title: 'August 2023',
        subtitle: '... Wanderung - Jochberg Walchensee',
        src: 'https://photos.google.com/share/AF1QipPyiasLQAZkCjXiC4WpX3hDNxmSnU2CG4jXq6tLPm3e5NMm_dENXbowl7byJldxdw/photo/AF1QipMdsVNGhimMXFOpBoWPM0xBIMZnxQNVwEo0GMAH?key=UDFnZHp3SXZ3X3NVZlhWX01DWklhV1BKY3BpcmVB',
        // src: 'IMG-20230813-WA0058.jpg'
    },
    {
        title: 'November 2023',
        subtitle: 'Wanderung Josefsthaler Wasserfälle',
        src: 'https://photos.google.com/share/AF1QipOSJmbP-1MdLAV6EcOI0mk0Eu1SzAHSHCiuWCyq5kCi-XSA3GjcTojyFmGRN6RVDw/photo/AF1QipPpa3SCLMd1pahjb5rPjI0OFeGot8GFPLyqrJZb?key=NGVGZzRNc2x6cTg0SjdaUjc0ekQ5YzE5Q29sZnlR',
        // src: 'IMG-20231101-WA0130.jpg'
    },
    {
        title: 'November 2023',
        subtitle: 'Karneval Mainz',
        src: 'https://photos.google.com/share/AF1QipNpxd5orIxBlUEGx-FCdBIpMDrWuPXnYUcRM13Gvfm80fKRmEGCmCYspqwndrK96A/photo/AF1QipNRScZl41KkJ-cOHMYx_uvX0eGOij2BsaKsI8Ej?key=MnZ4dW9BS2pJai1SbFBBRXhtRXoxTjR6bllyTXV3',
        // src: 'IMG-20231111-WA0069.jpg'
    },
    {
        title: 'Dezember 2023',
        subtitle: 'Viel Schnee in München',
        src: 'https://photos.google.com/share/AF1QipNJ2ny_lTAlosQD1Fanw88vLgfBiJsKIPgZHydh-XPagVVvqt5q9Ftlizb9t0-6xw/photo/AF1QipP5pnNpkvZHhZQfhRI-t_fEGZW-Qbg7Xmo4WvqO?key=c2h3SXoxeHlRMU9hc29ZOXNLOXMwUktLdlY3OURR',
        // src: 'IMG-20231203-WA0036.jpg'
    },
    {
        title: 'Jannuar 2024',
        subtitle: 'Snowboarden Wilder Kaiser',
        src: 'https://photos.google.com/share/AF1QipOmQIZ0zDTEw9F55sY6LJfEi5F7wcHYuvclb56QdgKPI_9xXbHKQH06x_8NYTVFBQ/photo/AF1QipOHsrgKKmiCx-JSWiutDRO6rasIwS7rpta25JVD?key=QlZjaTZKOHpSMmp0V3ZIak10dTBXNHczNWs4TXd3',
        // src: 'IMG-20240104-WA0020.jpg'
    },
    {
        title: 'Mai 2024',
        subtitle: 'Erstes mal gemeinsam in Peru - Silvi Familie',
        src: 'https://photos.google.com/share/AF1QipOilEbkg8p002__rmDgRVWyC9dUlcuFo8yabzsnUNVW-mhNQMtjEfwzBQTbMmPBdw/photo/AF1QipMZcCJ1I3lihYaspoBHWhA6yz7AlJLiuITaF4rR?key=VTU2SDlYdlc1MUFHUE0wVmdZTmZKdUs4dklObjJB',
        // src: '20240512_170041.jpg'
    },
    {
        title: 'August 2024',
        subtitle: '... ',
        src: 'https://photos.google.com/share/AF1QipO63E85dWiWTFF5scYGDCAM3a6EuWkwm5AWhL0sD5zUcacOKotIVZi1ETC_q2VDzw/photo/AF1QipP_e6iSOXpI7A0KHkLbl604BQbTwcEqEw5BgOgF?key=Skl5UE5wamlBdW82aUpsOS01OFgwMVdyTW40UC1B',
        // src: 'IMG-20240816-WA0023.jpg'
    },
    {
        title: 'Februar 2025',
        subtitle: 'Zweites mal in Peru - Silvi Geburtstag',
        src: 'https://photos.google.com/share/AF1QipO9aIXWtDcZuEeNXLk2iy3iQdVjDMqCzCFQQehSbQsSu_IHKngr5YIJNKBUGB4EZQ?key=UWtRU2U4ZG9MM2lYYlNBSXJ0UWVtQ2Z3OFZsemV3',
        // src: 'IMG-20250215-WA0106.jpg'
    },
    {
        title: 'Februar 2025',
        subtitle: `Leckere Jugo's mit Silvis Pa`,
        src: 'https://photos.google.com/share/AF1QipOV-9Dzv09km1mRqE71EQcHXK1hAPvjydB0zCVKUP4lbw--IkNPeIA476PVa2F9gw/photo/AF1QipPmiR-Q2ltLhF522jWQG8Dq0rHVu87kIh_bCk3n?key=UWxDb1NjSEdMSVZQM3ZGQmZFUjM1cm90MmVUbURn',
        // src: 'IMG-20250221-WA0031.jpg'
    },
    {
        title: 'März 2025',
        subtitle: 'Silvi bekommt einen Ring in Peru',
        src: 'https://photos.google.com/share/AF1QipPXPq_Gnj7hQ5frfC8kc8gEbnbQwqF16F4L-hTSZEDB6KDphlWPv2SOpjNEdraLOQ/photo/AF1QipNubXPnO_dLYMrF4-THUOWqVX8YP8rvj6UZQNqQ?key=WUJvTFlzbWZTZWZlUkI3cXhQeVpEYXBNb192aVRn',
        // src: 'IMG-20250302-WA0062.jpg'
    },
    {
        title: 'Juli 2025<',
        subtitle: 'Erinnerungen an Peru Daheim beim Kochen',
        src: 'https://photos.google.com/share/AF1QipNxTLUaCGRSSmfLLJh_klEhWbHjIVkvd6fgJUMiXWJ2PA1YnAtS0wcNCCNAm0coOQ/photo/AF1QipM9wmtv5c4vDN4wJqQpLn-Pu9FVu6fqlDr1CHkv?key=TzZTNzFnOENIUHhHeDd5RzhnZWFwZDNNc2pUTFlB',
        // src: 'IMG-20250726-WA0029.jpg'
    }
];

/* images.forEach(i =>{
    i.src = 'placeholderImg.jpg';
}) */

const imageEnd = 'https://photos.google.com/share/AF1QipO6fJkuBhha6iaFM9bn-dS9X4nGuCtJw0vDpZ1V4Ex6a0U-irHw1Yv1A2ezMZ8uIg/photo/AF1QipN0txOdkA9qvnr5rSROQ8FajksIVDTf242AV58Z?key=Yl85MjVBYWR3YUl5OHBpa2RkV0J5dDlMa0RiaS1n';



interface ItemProps {
    id: string;
}
export const ImageSection = component$<ItemProps>((props) => {
    return (
        <section class="section-light regular-section is-fullheight" id={props.id}>
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
                                                <img src={item.src} width={533} height={400} />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="media-content">
                                                <p class="title is-4">{item.title}</p>
                                                <p class="subtitle is-6">{item.subtitle}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>


                        <div class="space40px"></div>
                        <div data-aos="fade-up" data-aos-easing="linear">
                            <img src={imageEnd} class="divider has-vertically-align" alt="~~~" width={496.46} height={100}></img>
                        </div>
                        <div class="space40px"></div>
                        <div class="space40px"></div>
                    </div>
                </div>
            </div>
        </section>
    )
});
