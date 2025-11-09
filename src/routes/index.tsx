import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
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


export default component$(() => {
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

  const navItems: NavItem[] = [
    { href: `#${ids.home}`, title: 'Home', active: useSignal(true) },
    { href: `#${ids.intro}`, title: 'Willkommen', active: useSignal(false) },
    { href: `#${ids.date}`, title: 'Datum', active: useSignal(false) },
    { href: `#${ids.accommodation}`, title: 'Unterkunft', active: useSignal(false) },
    { href: `#${ids.location}`, title: 'Anreise', active: useSignal(false) },
    { href: `#${ids.program}`, title: 'Programm', active: useSignal(false) },
    { href: `#${ids.rsvp}`, title: 'RSVP', active: useSignal(false) },
    { href: `#${ids.images}`, title: 'Bilder', active: useSignal(false) }
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

export const head: DocumentHead = {
  title: "Welcome to Silvi y Mat",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
