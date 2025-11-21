import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler, StaticGenerateHandler } from "@builder.io/qwik-city";
import { AccommodationSection } from "~/components/accommodation-section";
import { AosInit } from "~/components/AosInit";
import { FooterSection } from "~/components/footer-section";
import { HeroBody } from "~/components/hero-body";
import { HeroFoot } from "~/components/hero-foot";
import { ImageSection } from "~/components/image-section";
import { IntroSection } from "~/components/into-section";
import { LocationSection } from "~/components/location-section";
import { MobileNav } from "~/components/mobile-nav";
import { ProgrammSection } from "~/components/programm-section";
import { RsvpSection } from "~/components/rsvp-section";
import { DateTimeSection } from "~/components/date-time-section";
import { inlineTranslate, useSpeakLocale } from "qwik-speak";

import { config } from '../../speak-config';


export default component$(() => {
  const locale = useSpeakLocale();

  const ids = {
    home: 'start',
    intro: 'intro',
    date: 'date',
    accommodation: 'accommodation',
    location: 'location',
    program: 'program',
    rsvp: 'rsvp',
    images: 'images'
  };

  const activeHome = useSignal(true);
  const activeIntro = useSignal(false);
  const activeDate = useSignal(false);
  const activeAccommodation = useSignal(false);
  const activeLocation = useSignal(false);
  const activeProgram = useSignal(false);
  const activeRsvp = useSignal(false);
  const activeImages = useSignal(false);

  const navItems: NavItem[] = [
    { href: `#${ids.home}`, title: 'Home', active: activeHome },
    { href: `#${ids.intro}`, title: 'Willkommen', active: activeIntro },
    { href: `#${ids.date}`, title: 'Datum', active: activeDate },
    { href: `#${ids.location}`, title: 'Anreise', active: activeLocation },
    { href: `#${ids.accommodation}`, title: 'Unterkunft', active: activeAccommodation },

    { href: `#${ids.program}`, title: 'Programm', active: activeProgram },
    { href: `#${ids.rsvp}`, title: 'RSVP', active: activeRsvp },
    { href: `#${ids.images}`, title: 'Bilder', active: activeImages },
  ];


  return (
    <main>
      <AosInit></AosInit>
      <div class="header-wrapper" id={ids.home}>
        <section class="hero is-large">
          <MobileNav items={navItems}></MobileNav>
          <HeroBody></HeroBody>
        </section>
      </div>


      <div class="main-content">
        {/* Sticky Navbar */}
        <HeroFoot items={navItems}></HeroFoot>
        <IntroSection id={ids.intro}></IntroSection>
        <DateTimeSection id={ids.date}></DateTimeSection>
        <AccommodationSection id={ids.accommodation}></AccommodationSection>
        <LocationSection id={ids.location}></LocationSection>
        <ProgrammSection id={ids.program}></ProgrammSection>
        <RsvpSection id={ids.rsvp}></RsvpSection>
        <ImageSection id={ids.images}></ImageSection>
      </div>
      <FooterSection></FooterSection>
    </main>
  );
});


export const head: DocumentHead = () => {
  const t = inlineTranslate();

  return {
    // Welcome to Silvi y Mat
    title: t('app.head.home.title', { name: 'Qwik Speak' }),
    meta: [
      {
        name: 'description',
        content: t('app.head.home.description')
      }
    ],
  };
};

export const onStaticGenerate: StaticGenerateHandler = () => {
  return {
    params: config.supportedLocales.map(locale => {
      return { lang: locale.lang !== config.defaultLocale.lang ? locale.lang : '.' };
    })
  };
};
