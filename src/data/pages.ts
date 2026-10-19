import { withBase } from '../utils/url';

export interface PageMeta {
	/** File name without extension; also the URL (`/<slug>.html`). */
	slug: string;
	/** Label used in the navigation bar. */
	label: string;
	/** Contents of <title>. */
	title: string;
	/** og:title — the title without the " - DEEP DIVING UDINE" suffix. */
	ogTitle: string;
	/** Shared by <meta name="description"> and og:description. */
	description: string;
	keywords: string;
	/** Root-relative paths; BaseLayout turns them into absolute URLs. */
	ogImages: string[];
	/** Hero image behind the page title. */
	bannerImage: string;
	/** CSS background-position for the hero image. */
	bannerPosition: string;
	/** Hero height preset, see .banner-* in public/css/style.css. */
	bannerSize: 'tall' | 'medium' | 'short';
}

/** Every page of the site, in navigation order. */
export const pages: PageMeta[] = [
	{
		slug: 'index',
		label: 'Home',
		title: 'DEEP DIVING UDINE - Corsi sub a Udine, Friuli. Brevetti internazionali',
		ogTitle: 'Corsi sub a Udine, Friuli. Brevetti internazionali',
		description: 'Corsi sub per principianti e brevetti avanzati a Udine, Friuli Venezia Giulia. Scuola subacquea autorizzata SSI - Scuba Schools International',
		keywords: 'corso sub,corsi sub,brevetto sub,udine,subacquea,immersioni,apnea,diving,sport,friuli venezia giulia,ssi,club,circolo,friulana,friulani,udinese,snorkeling,scuba,dive,underwater,istruzione,didattica,bombole,open water,advanced,crossover,deep,nitrox,relitti',
		ogImages: [
			'/uploads/new-logo-deep-256_orig.webp',
			'/uploads/corsi-brevetti-sub-udine-friuli_orig.webp',
			'/uploads/ssi-scuba-school-international_orig.webp',
			'/files/theme/deep_facebook_icon.webp',
			'/files/theme/deep_instagram_icon.webp',
			'/files/theme/deep_youtube_icon.webp',
			'/uploads/logo-intestazione.png',
		],
		bannerImage: '/uploads/background-images/884116991.webp',
		bannerPosition: '100.00% 72.76%',
		bannerSize: 'tall',
	},
	{
		slug: 'chi-siamo',
		label: 'Chi siamo',
		title: 'Chi siamo - DEEP DIVING UDINE',
		ogTitle: 'Chi siamo',
		description: 'Informazioni sulla nostra associazione sportiva, scuola subacquea autorizzata SSI. Diventa socio e fai un brevetto subacqueo!',
		keywords: 'corso sub,corsi sub,brevetto sub,udine,subacquea,immersioni,apnea,diving,sport,friuli venezia giulia,ssi,club,circolo,friulana,friulani,udinese,snorkeling,scuba,dive,underwater,istruzione,didattica,bombole,open water,advanced,crossover,deep,nitrox,relitti',
		ogImages: [
			'/uploads/dive-center_orig.png',
			'/uploads/xr_orig.png',
			'/uploads/mdb_orig.png',
			'/files/theme/deep_facebook_icon.webp',
			'/files/theme/deep_instagram_icon.webp',
			'/files/theme/deep_youtube_icon.webp',
			'/uploads/logo-intestazione.png',
		],
		bannerImage: '/uploads/background-images/1773517309.webp',
		bannerPosition: '50% 50%',
		bannerSize: 'medium',
	},
	{
		slug: 'staff',
		label: 'Staff',
		title: 'Staff istruttori e collaboratori - DEEP DIVING UDINE',
		ogTitle: 'Staff istruttori e collaboratori',
		description: 'Deep People. Per diventare un bravo subacqueo non basta un corso, serve anche un bravo istruttore!',
		keywords: 'brevetti subacquei, corso sub, istruttori subacquei, curriculum, udine, friuliavenezia giulia',
		ogImages: [
			'/uploads/nik_orig.webp',
			'/uploads/gold-instructor_orig.webp',
			'/uploads/platinum-diver_orig.webp',
			'/uploads/award_orig.webp',
			'/uploads/gianda_orig.webp',
			'/uploads/gold-diver_orig.webp',
			'/uploads/published/foto.png',
			'/uploads/gold-diver_1.webp',
			'/uploads/published/400.jpg',
			'/uploads/michi_orig.webp',
		],
		bannerImage: '/uploads/background-images/1452336786.webp',
		bannerPosition: '50.00% 50.26%',
		bannerSize: 'medium',
	},
	{
		slug: 'corsi',
		label: 'Corsi',
		title: 'Corso sub principianti. Brevetto Open Water Diver - DEEP DIVING UDINE',
		ogTitle: 'Corso sub principianti. Brevetto Open Water Diver',
		description: 'Scopri tutti i corsi ed i brevetti subacquei che puoi ottenere, da principiante a sub esperto. Crossover e corsi tecnici. A Udine, Friuli Venezia Giulia.',
		keywords: 'corso sub,corsi sub,brevetto sub,udine,subacquea,immersioni,apnea,diving,sport,friuli venezia giulia,ssi,club,circolo,friulana,friulani,udinese,snorkeling,scuba,dive,underwater,istruzione,didattica,bombole,open water,advanced,crossover,deep,nitrox,relitti',
		ogImages: [
			'/uploads/requisiti-website_orig.webp',
			'/uploads/teoria-website_orig.webp',
			'/uploads/pratica-website_orig.webp',
			'/uploads/ssi_orig.png',
			'/uploads/apple-app-store_orig.png',
			'/uploads/google-play-store_orig.png',
			'/files/theme/deep_facebook_icon.webp',
			'/files/theme/deep_instagram_icon.webp',
			'/files/theme/deep_youtube_icon.webp',
			'/uploads/logo-intestazione.png',
		],
		bannerImage: '/uploads/background-images/1592601701.webp',
		bannerPosition: '50.00% 45.86%',
		bannerSize: 'medium',
	},
	{
		slug: 'apnea',
		label: 'Apnea',
		title: 'Corsi e brevetti Ecology. Save the Oceans! - DEEP DIVING UDINE',
		ogTitle: 'Corsi e brevetti Ecology. Save the Oceans!',
		description: 'Brevetti subacquei Ecology. Deep Diving Udine e Blue Oceans by SSI, unisciti a noi e proteggi gli oceani!',
		keywords: 'corsi subacquei udine, friuli venezia giulia, mission deep blue, scuba, brevetto, udinese, club',
		ogImages: [
			'/uploads/basic-freediving.jpg',
			'/uploads/800.jpg',
			'/uploads/ssi_7.png',
			'/uploads/apple-app-store_7.png',
			'/uploads/google-play-store_7.png',
			'/files/theme/deep_facebook_icon.webp',
			'/files/theme/deep_instagram_icon.webp',
			'/files/theme/deep_youtube_icon.webp',
			'/uploads/logo-intestazione.png',
		],
		bannerImage: '/uploads/background-images/495794096.jpg',
		bannerPosition: '50.00% 39.45%',
		bannerSize: 'medium',
	},
	{
		slug: 'specialty',
		label: 'Specialty',
		title: 'Corsi e brevetti sub avanzati e tecnici - DEEP DIVING UDINE',
		ogTitle: 'Corsi e brevetti sub avanzati e tecnici',
		description: 'Scopri i brevetti subacquei di specialità per progredire e fare immersioni emozionanti.',
		keywords: 'corsi subacquei avanzati, subacquea tecnica, brevettti di specialità, udine, friuli',
		ogImages: [
			'/uploads/perfect-buoyancy.jpeg',
			'/uploads/navigation.jpeg',
			'/uploads/aowd.jpeg',
			'/uploads/deep-diving.jpeg',
			'/uploads/night.jpeg',
			'/uploads/nitrox.jpeg',
			'/uploads/wreck-diving.jpeg',
			'/uploads/dry.jpeg',
			'/uploads/waves.jpeg',
			'/uploads/boat.jpeg',
		],
		bannerImage: '/uploads/background-images/474907913.webp',
		bannerPosition: '50.00% 14.60%',
		bannerSize: 'medium',
	},
	{
		slug: 'ecology',
		label: 'Ecology',
		title: 'Corsi e brevetti Ecology. Save the Oceans! - DEEP DIVING UDINE',
		ogTitle: 'Corsi e brevetti Ecology. Save the Oceans!',
		description: 'Brevetti subacquei Ecology. Deep Diving Udine e Blue Oceans by SSI, unisciti a noi e proteggi gli oceani!',
		keywords: 'corsi subacquei udine, friuli venezia giulia, mission deep blue, scuba, brevetto, udinese, club',
		ogImages: [
			'/uploads/marine-ecology.jfif',
			'/uploads/shark-ecology.jfif',
			'/uploads/manta-ray-ecology.jfif',
			'/uploads/fish-identification.jfif',
			'/uploads/coral-identification.jfif',
			'/uploads/sea-turtle-ecology.jfif',
			'/uploads/marine-mammal-ecology.jfif',
			'/uploads/marine-invertebrate-ecology.jfif',
			'/uploads/nudibranch-ecology.jfif',
			'/uploads/mdb_3.png',
		],
		bannerImage: '/uploads/background-images/1201870644.webp',
		bannerPosition: '50.00% 19.13%',
		bannerSize: 'medium',
	},
	{
		slug: 'media',
		label: 'Media',
		title: 'Multimedia. Foto e video subacquei - DEEP DIVING UDINE',
		ogTitle: 'Multimedia. Foto e video subacquei',
		description: 'Video e foto subacquei fatti da noi in giro per il mondo. Venite con Deep Diving Udine nei mari più belli che ci siano!',
		keywords: 'YouTube channel, video subacquei, fotosub',
		ogImages: [
			'/uploads/youtube-channel_orig.webp',
			'/uploads/8615128.jpg',
			'/files/theme/deep_facebook_icon.webp',
			'/files/theme/deep_instagram_icon.webp',
			'/files/theme/deep_youtube_icon.webp',
			'/uploads/logo-intestazione.png',
		],
		bannerImage: '/uploads/background-images/6481160.webp',
		bannerPosition: '50% 50%',
		bannerSize: 'medium',
	},
	{
		slug: 'contatti',
		label: 'Contatti',
		title: 'Contatti. Chiedi informazioni sui nostri corsi - DEEP DIVING UDINE',
		ogTitle: 'Contatti. Chiedi informazioni sui nostri corsi',
		description: 'Tutti i modi per contattare Deep Diving Udine e ricevere nformazioni sui nostri corsi e brevetti subacquei.',
		keywords: 'corso sub udine,corsi sub udine,brevetto sub udine,subacquea,istruttore sub,friuli,informazioni,contatti,whatsapp,messenger',
		ogImages: [
			'/uploads/whatsapp-chat_orig.webp',
			'/uploads/chat-messenger_orig.webp',
			'/files/theme/deep_facebook_icon.webp',
			'/files/theme/deep_instagram_icon.webp',
			'/files/theme/deep_youtube_icon.webp',
			'/uploads/logo-intestazione.png',
		],
		bannerImage: '/uploads/background-images/1634804312.webp',
		bannerPosition: '50.00% 70.58%',
		bannerSize: 'short',
	},
];

/** Look up a page by slug; throws at build time if the slug is unknown. */
export function getPage(slug: string): PageMeta {
	const page = pages.find((p) => p.slug === slug);
	if (!page) throw new Error(`Unknown page slug: ${slug}`);
	return page;
}

/** The home page lives at `/`, every other page at `/<slug>.html`. */
export function pageUrl(slug: string): string {
	return withBase(slug === 'index' ? '/' : `/${slug}.html`);
}
