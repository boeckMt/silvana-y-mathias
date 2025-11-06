import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AosInit } from "~/components/AosInit";
import { FooterSection } from "~/components/footer-section";
import { HeroBody } from "~/components/hero-body";
import { HeroFoot } from "~/components/hero-foot";
import { ImageSection } from "~/components/image-section";
import { IntroSection } from "~/components/into-section";
import { LocationSection } from "~/components/location-section";
import { MobileNav } from "~/components/mobile-nav";
import { RsvpSection } from "~/components/rsvp-section";
import { TimeSection } from "~/components/time-section";


export default component$(() => {
  const ids = ['start', 'intro', 'date', 'location', 'about', 'rsvp'];
  const navItems: NavItem[] = [
    { href: `#${ids[0]}`, title: 'Start', active: useSignal(true) },
    { href: `#${ids[1]}`, title: 'Intro', active: useSignal(false) },
    { href: `#${ids[2]}`, title: 'Date', active: useSignal(false) },
    { href: `#${ids[3]}`, title: 'Ort', active: useSignal(false) },
    { href: `#${ids[4]}`, title: 'Über CPW und CPP', active: useSignal(false) },
    { href: `#${ids[5]}`, title: 'RSVP', active: useSignal(false) }
  ];
  return (
    <main>
      <AosInit></AosInit>
      <div class="header-wrapper" id={ids[0]}>
        <section class="hero is-large">
          <MobileNav items={navItems}></MobileNav>
          <HeroBody></HeroBody>
        </section>
      </div>
      

      <div class="main-content">
        <HeroFoot items={navItems}></HeroFoot>
        <IntroSection id={ids[1]}></IntroSection>
        <TimeSection id={ids[2]}></TimeSection>
        <LocationSection id={ids[3]}></LocationSection>
        <ImageSection id={ids[4]}></ImageSection>
        <RsvpSection id={ids[5]}></RsvpSection>
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
