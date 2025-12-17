# Template
https://simple-wedding-invitation.netlify.app/
source: https://github.com/daengdoang/simple-wedding-invitation


# countdown
- https://github.com/kbwood/countdown?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
- https://github.com/kbwood/countdown/blob/master/src/js/jquery.countdown.js
- https://github.com/VincentLoy/simplyCountdown.js/tree/develop


# RSPV
### Google RSVP
- https://forms.gle/<id>


### Google Forms
https://docs.google.com/forms/u/0/

https://workspace.google.com/intl/de/products/forms/

create form "Einladung zur Party" -> use share link


### Google calendar
- https://developers.google.com/workspace/calendar/api/quickstart/js
- Google calendar event RSVP without google account
- Create event and use -> invite via link


### Google sheets
- https://developers.google.com/workspace/sheets/api/quickstart/js?hl=de


### WhatsApp Message
- https://api.whatsapp.com/send?phone=<number>&text=<text>&source=<source>&data=<data>


### WhatsApp Group
- 'https://chat.whatsapp.com/<id>?mode=wwt'


### create a WhatsApp group invite link
1. Open WhatsApp
2. Go to your group chat
3. "Mit Gruppenlink einladen"

https://faq.whatsapp.com/3242937609289432/?cms_platform=web&cms_id=3242937609289432&draft=false


### Mail Link
- mailto:<e-mail>?subject=<subject>&body=<body>



# Images dev
https://dev.me/products/image-placeholder
https://via.assets.so/img.jpg?w=533&h=400&bg=e5e7eb&f=jpg

https://qwik.dev/docs/integrations/image-optimization/

# host images
- github pages
- Firebase (google)
- Cloudflare
- Dropbox

### with google
- https://photos.fife.usercontent.google.com/pw/<id>?authuser=1
- not working???


### google drive
- https://gist.github.com/jrichardsz/392f66fa887a5adc1351496750a70424
- https://support.google.com/sites/thread/253003338/images-from-google-drive-in-embedded-html-no-longer-working?hl=en
- https://lh3.googleusercontent.com/d/<id>=s4000?authuser=0
- Sometimes images fail to load.


### with picser
- https://picser.pages.dev/

### git LFS
- https://docs.github.com/en/repositories/working-with-files/managing-large-files/configuring-git-large-file-storage


# Google maps embed
- https://learn.showit.com/en/articles/5217010-google-maps-embed


# Font
- https://www.npmjs.com/package/@fontsource/alex-brush
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text/Wrapping_breaking_text

- https://github.com/feat-agency/vite-plugin-webfont-dl
- https://github.com/cssninjaStudio/unplugin-fonts


# Github Workflow
- https://qwik.dev/docs/deployments/github-pages/


# Qwik I18n
- https://qwik.dev/docs/integrations/i18n/
- https://github.com/wmertens/compiled-i18n
- https://github.com/wmertens/compiled-i18n/blob/main/docs/qwik.md
- https://github.com/wmertens/compiled-i18n/tree/main?tab=readme-ov-file#browser-code


### qwik-speak
- https://robisim74.gitbook.io/qwik-speak/library/tutorial-routing
- https://github.com/robisim74/qwik-speak/tree/main


# Qwik SSG
https://vite-plugin-ssr.com/pre-rendering

# Test mobile
chrome://inspect/#devices


# Qwik PWA (TODO...)
- https://github.com/QwikCommunity/pwa
- https://vite-pwa-org.netlify.app/guide/


# Notifications_API (TODO...)
- https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API
- store notifications in github ???
- https://github.com/settings/personal-access-tokens ???


# Language based on browser (on GitHub pages)
- no html5 routing so we need an index.html for each site
- on the base language "de" redirect to user navigator.language
- to allow redirect from pathname/ and also switch to german (base) use de as base and de-DE for german language 

# Git Images 
- https://git-lfs.com/
- git lfs install
- git lfs track "public/assets/**/*.jpg"
- git lfs track "public/assets/**/*.jpeg"
- git lfs track "public/assets/**/*.png"

- adjust GitHub pages.yml to use lfs

# Text
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text/Wrapping_breaking_text#:~:text=A%20hard%20break%20character%20can,breaks%20if%20breaking%20is%20needed.

# TODO:
- image optimize
- https://www.npmjs.com/package/vite-plugin-image-optimizer
or 
- https://qwik.dev/docs/integrations/image-optimization/#image-optimization