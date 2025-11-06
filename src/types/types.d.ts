// src/types/simplycountdown.d.ts
declare module 'simplycountdown.js' {
    const simplyCountdown: any;
    export default simplyCountdown;
}

declare module 'aos' {
    const aos: any;
    export default aos;
}

interface NavItem {
  href: string;
  title: string;
  active: Signal<boolean>;
}