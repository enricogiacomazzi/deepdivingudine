# Deep Diving Udine

Sito statico di Deep Diving Udine A.s.d., costruito con [Astro](https://astro.build).

## Comandi

| Comando           | Cosa fa                                        |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Installa le dipendenze                         |
| `npm run dev`     | Server di sviluppo su `localhost:4321`         |
| `npm run build`   | Genera il sito statico in `dist/`              |
| `npm run preview` | Serve `dist/` in locale, come in produzione    |
| `npx astro check` | Controlla i tipi di pagine e componenti        |

Il contenuto di `dist/` è il sito completo: va pubblicato così com'è, senza
runtime lato server.

## Struttura

```
src/
  data/pages.ts        Metadati di ogni pagina: titolo, description, keywords,
                       immagini Open Graph, immagine del banner. È l'unico posto
                       da toccare per cambiare SEO o voce di menu.
  data/site.ts         Dati condivisi: contatti, social, JSON-LD schema.org.
  layouts/BaseLayout.astro   <head>, header, banner, footer. Una pagina passa
                       solo il proprio `slug`.
  components/          SiteHeader, SiteFooter, PageBanner, PhotoCarousel.
  pages/*.astro        Una per pagina: contiene solo il contenuto di #wsite-content.
public/                Servito così com'è alla radice del sito:
  css/main.css         Stili dei contenuti, ereditati dal tema Weebly.
  css/style.css        Stili del guscio (header, menu, banner, footer).
  fonts/ uploads/ files/theme/
```

## URL

`build.format: 'file'` mantiene gli URL storici: `/chi-siamo.html` e non
`/chi-siamo/`. La home è servita sia da `/` che da `/index.html`.

Per aggiungere una pagina: inserire una voce in `src/data/pages.ts` (definisce
anche il menu, in quell'ordine) e creare `src/pages/<slug>.astro` che usa
`BaseLayout` con quello `slug`.

## Note sulla conversione

Il sito era un export Weebly. jQuery, il bundle del tema (~700 KB) e i tracker
Weebly sono stati rimossi; Cookiebot e Google Analytics sono rimasti.
Due parti dipendevano da quel bundle e sono state riscritte:

- **Menu mobile** — ora in CSS puro (checkbox `#mobile-input` + `label.hamburger`).
- **Galleria foto di `/media.html`** — ora `PhotoCarousel.astro`, un carosello
  con scroll-snap nativo; i pulsanti e l'autoplay sono progressive enhancement.

Il modulo di `/contatti.html` invia ancora a `weebly.com/weebly/apps/formSubmit.php`:
va sostituito con un servizio proprio prima o poi (vedi commento nella pagina).
