import { component$ } from '@builder.io/qwik'
import { inlineTranslate } from 'qwik-speak';

interface ItemProps {
    id: string;
}

interface ItemIconProps {
    name: string;
}


// const imageEnd =  `${import.meta.env.BASE_URL}assets/blumen_schnitt.png`;

const MenuIconSection = component$<ItemIconProps>((props) => {
    const iconBaseUrl = `${import.meta.env.BASE_URL}assets/`;
    return <img class="icon-44" alt="glutenfrei" src={iconBaseUrl + props.name} loading="lazy" width={44} height={44} crossOrigin="anonymous" />
});


export const MenuSection = component$<ItemProps>((props) => {
    const t = inlineTranslate();

    const menuText = {
        title: t('app.menu.title@@Menü'),

        // Section titles
        text0: t('app.menu.text0@@VORSPEISEN'),
        text1: t('app.menu.text1@@HAUPTSPEISEN'),
        text2: t('app.menu.text2@@DESSERT'),

        // Starters
        text3: t('app.menu.text3@@Tomate-Mozzarella'),
        text4: t('app.menu.text4@@Antipasti'),
        text5: t('app.menu.text5@@Mariniertes Fleisch'),
        text6: t('app.menu.text6@@Salatvariationen'),

        // Main course 1
        text7: t('app.menu.text7@@Kalbstafelspitz'),
        text8: t('app.menu.text8@@mit Pfefferrahmsauce,'),
        text9: t('app.menu.text9@@mediterranem Gemüse,'),
        text10: t('app.menu.text10@@und Schupfnudeln'),

        // Main course 2
        text11: t('app.menu.text11@@Saiblingsfilet'),
        text12: t('app.menu.text12@@mit Velouté,'),
        text13: t('app.menu.text13@@Brokkoli-Blumenkohl'),
        text14: t('app.menu.text14@@Gemüse'),
        text15: t('app.menu.text15@@und Salzkartoffeln'),

        // Vegetarian
        text16: t('app.menu.text16@@Salatvariationen'),
        text17: t('app.menu.text17@@Gemüse-Tortellini'),

        // Dessert
        text18: t('app.menu.text18@@Kokos-Panna Cotta'),
        text19: t('app.menu.text19@@Saisonales Obst'),


    };

    const drinksText = {
        title: t('app.drinks.title@@Getränke'),

        // Section titles
        text0: t('app.drinks.text0@@Mit (Alkohol)'),
        text1: t('app.drinks.text1@@SOFTGETRÄNKE'),
        text2: t('app.drinks.text2@@HEIßGETRÄNKE'),

        // Alcohol
        text3: t('app.drinks.text3@@Zwickl Max - Das Naturtrübe vom Fass'),
        text4: t('app.drinks.text4@@Maxlrainer Pils'),
        text5: t('app.drinks.text5@@Aiblinger Schwarzbier'),
        text6: t('app.drinks.text6@@Ernte Weisse - Das Leichte'),
        text7: t('app.drinks.text7@@Leo Weisse vom Fass'),
        text8: t('app.drinks.text8@@Schloss Weisse - Das Dunkle Weissbier'),
        text9: t('app.drinks.text9@@Prosecco (Trocken)'),
        text10: t('app.drinks.text10@@Rot- und Weißwein (Hausweine)'),
        text11: t('app.drinks.text11@@Engerl Hell (Alkoholfrei)'),
        text12: t('app.drinks.text12@@Engerl Weisse (Alkoholfrei)'),

        // Soft drinks
        text13: t('app.drinks.text13@@Zitronen-, Orangenlimonade'),
        text14: t('app.drinks.text14@@Spezi'),
        text15: t('app.drinks.text15@@Coca-Cola Zero'),
        text16: t('app.drinks.text16@@Coca-Cola'),
        text17: t('app.drinks.text17@@Fritz Orange'),
        text18: t('app.drinks.text18@@Fritz Ingwer-Limette'),
        text19: t('app.drinks.text19@@Fritz Kola Super Zero'),
        text20: t('app.drinks.text20@@Fritz Kola'),
        text21: t('app.drinks.text21@@Schorle nach Wahl'),
        text22: t('app.drinks.text22@@Apffel-, Orangensaft,'),
        text23: t('app.drinks.text23@@Trauben-, Grapefruitsaft-,'),
        text24: t('app.drinks.text24@@Ananassaft, Maracuja-,'),
        text25: t('app.drinks.text25@@Cranberry-, Johannisbeernektar'),
        text26: t('app.drinks.text26@@Adelholzener Classic'),
        text27: t('app.drinks.text27@@Adelholzener Naturell'),

        // Hot drinks
        text28: t('app.drinks.text28@@Tasse Crema Kaffee'),
        text29: t('app.drinks.text29@@Espresso'),
        text30: t('app.drinks.text30@@Cappuccino'),
        text31: t('app.drinks.text31@@Latte Macchiato'),
        text32: t('app.drinks.text32@@(Laktosefreie- und Hafermilch)'),
        text33: t('app.drinks.text33@@Earl Grey -, Darjeeling'),
        text34: t('app.drinks.text34@@Grüntee'),
        text35: t('app.drinks.text35@@Kamille -, Pfefferminz -, Bergkräutertee'),
        text36: t('app.drinks.text36@@Heisses Wasser mit Ingwer und Zitrone'),
    };

    return (
        <>

            <section class="section-color bg-color-1" id={props.id}>
                <div class="container">

                    <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                        <h1 class="title has-text-centered section-title">{menuText.title}</h1>
                    </div>
                    <div class="columns is-multiline" data-aos="fade-up" data-aos-easing="linear">
                        <div class="column is-4 has-vertically-aligned-content">
                            <div class="date is-larger has-text-centered">
                                <strong>{menuText.text0}</strong>
                                <br></br>
                                <ul class="menu-list">
                                    <li class="dot"><span class="list-item">{menuText.text3}<MenuIconSection name="icon_gluten.png"></MenuIconSection> </span></li>
                                    <li class="dot"><span class="list-item">{menuText.text4}<MenuIconSection name="icon_vegan.png"></MenuIconSection> </span></li>
                                    <li class="dot"><span class="list-item">{menuText.text5}<MenuIconSection name="icon_laktose.png"></MenuIconSection> </span></li>
                                    <li class="dot"><span class="list-item">{menuText.text6}<MenuIconSection name="icon_gluten.png"></MenuIconSection><MenuIconSection name="icon_laktose.png"></MenuIconSection><MenuIconSection name="icon_vegan.png"></MenuIconSection> </span></li>
                                </ul>

                            </div>

                        </div>

                        <div class="column is-4 has-vertically-aligned-content">
                            <div class="date is-larger has-text-centered">
                                <strong>HAUPTSPEISEN</strong>
                                <br></br>

                                <ul class="menu-list mb-6">
                                    <li class="dot"><span class="list-item">{menuText.text7}<MenuIconSection name="icon_gluten.png"></MenuIconSection><MenuIconSection name="icon_laktose.png"></MenuIconSection></span></li>
                                    <li><span class="list-item">{menuText.text8}<MenuIconSection name="icon_gluten.png"></MenuIconSection> </span></li>
                                    <li><span class="list-item">{menuText.text9}<MenuIconSection name="icon_gluten.png"></MenuIconSection></span></li>
                                    <li><span class="list-item">{menuText.text10}<MenuIconSection name="icon_laktose.png"></MenuIconSection><MenuIconSection name="icon_vegan.png"></MenuIconSection> </span></li>
                                </ul>

                                <ul class="menu-list mb-6">
                                    <li class="dot"><span class="list-item">{menuText.text11}<MenuIconSection name="icon_gluten.png"></MenuIconSection><MenuIconSection name="icon_laktose.png"></MenuIconSection> </span></li>
                                    <li><span class="list-item">{menuText.text12}<MenuIconSection name="icon_gluten.png"></MenuIconSection> </span></li>
                                    <li><span class="list-item">{menuText.text13}<MenuIconSection name="icon_gluten.png"></MenuIconSection><MenuIconSection name="icon_vegan.png"></MenuIconSection></span></li>
                                    <li><span class="list-item">{menuText.text14}<MenuIconSection name="icon_gluten.png"></MenuIconSection><MenuIconSection name="icon_vegan.png"></MenuIconSection></span></li>
                                    <li><span class="list-item">{menuText.text15}<MenuIconSection name="icon_gluten.png"></MenuIconSection><MenuIconSection name="icon_vegan.png"></MenuIconSection> </span></li>
                                </ul>

                                <ul class="menu-list">
                                    <li class="dot"><span class="list-item">{menuText.text16}<MenuIconSection name="icon_gluten.png"></MenuIconSection><MenuIconSection name="icon_laktose.png"></MenuIconSection><MenuIconSection name="icon_vegan.png"></MenuIconSection> </span></li>
                                    <li class="dot"><span class="list-item">{menuText.text17}<MenuIconSection name="icon_vegan.png"></MenuIconSection> </span></li>
                                </ul>



                            </div>

                        </div>
                        <div class="column is-4 has-vertically-aligned-content">

                            <div class="date is-larger has-text-centered">
                                <strong>{menuText.text2}</strong>
                                <br></br>
                                <ul class="menu-list">
                                    <li class="dot"><span class="list-item">{menuText.text18}<MenuIconSection name="icon_vegan.png"></MenuIconSection> </span></li>
                                    <li class="dot"><span class="list-items">{menuText.text19}</span></li>
                                </ul>

                            </div>

                        </div>

                    </div>
                </div>

                {/* drinks ------------------------------------------------ */}
                <div class="container mt-6">

                    <div class="column is-12 regular-section" data-aos="fade-up" data-aos-easing="linear">
                        <h1 class="title has-text-centered section-title">{drinksText.title}</h1>
                    </div>
                    <div class="columns is-multiline" data-aos="fade-up" data-aos-easing="linear">
                        <div class="column is-4 has-vertically-aligned-content">
                            <div class="date is-larger has-text-centered">
                                <strong>{drinksText.text0}</strong>
                                <br></br>
                                <ul class="menu-list mb-4">
                                    <li class="dot"><span class="list-item">{drinksText.text3}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text4}</span></li>

                                    <li class="dot"><span class="list-item space-above">{drinksText.text5}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text6}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text7}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text8}</span></li>

                                    <li class="dot"><span class="list-item space-above">{drinksText.text9}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text10}</span></li>

                                    <li class="dot"><span class="list-item space-above">{drinksText.text11}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text12}</span></li>
                                </ul>

                            </div>

                        </div>

                        <div class="column is-4 has-vertically-aligned-content">
                            <div class="date is-larger has-text-centered">
                                <strong>{drinksText.text1}</strong>
                                <br></br>

                                <ul class="menu-list">
                                    <li class="dot"><span class="list-item">{drinksText.text13}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text14}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text15}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text16}</span></li>

                                    <li class="dot"><span class="list-item space-above">{drinksText.text17}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text18}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text19}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text20}</span></li>

                                    <li class="dot"><span class="list-item space-above">{drinksText.text21}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text22}</span></li>
                                    <li><span class="list-item">{drinksText.text23}</span></li>
                                    <li><span class="list-item">{drinksText.text24}</span></li>
                                    <li><span class="list-item">{drinksText.text25}</span></li>

                                    <li class="dot"><span class="list-item space-above">{drinksText.text26}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text27}</span></li>
                                </ul>
                            </div>

                        </div>
                        <div class="column is-4 has-vertically-aligned-content">

                            <div class="date is-larger has-text-centered">
                                <strong>{drinksText.text2}</strong>
                                <br></br>
                                <ul class="menu-list">
                                    <li class="dot"><span class="list-item">{drinksText.text28}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text29}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text30}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text31}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text32}</span></li>

                                    <li class="dot"><span class="list-item space-above">{drinksText.text33}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text34}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text35}</span></li>
                                    <li class="dot"><span class="list-item">{drinksText.text36}</span></li>
                                </ul>
                            </div>

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