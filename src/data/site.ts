/** Canonical origin. Must match `site` in astro.config.mjs. */
export const SITE_URL = 'https://www.deepdivingudine.it';

export const SITE_NAME = 'DEEP DIVING UDINE';

export const CONTACT = {
	phone: '+39 370 1359305',
	email: 'deepdivingudine@gmail.com',
	street: 'via Stiria 47',
	city: 'Udine',
	postalCode: '33100',
	country: 'IT',
	latitude: 46.038485526843985,
	longitude: 13.245115189391347,
};

export const SOCIAL = [
	{
		name: 'Facebook',
		url: 'http://www.facebook.com/corsisubudine',
		icon: '/files/theme/deep_facebook_icon.webp',
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com/deepdivingudine/',
		icon: '/files/theme/deep_instagram_icon.webp',
	},
	{
		name: 'YouTube',
		url: 'https://www.youtube.com/@deepdivingudine',
		icon: '/files/theme/deep_youtube_icon.webp',
	},
];

/** Profile URLs for schema.org `sameAs`; these are the ones the old site declared. */
const SAME_AS = [
	'https://www.facebook.com/corsisubudine',
	'https://instagram.com/deepdivingudine',
	'http://www.youtube.com/c/DeepDivingUdineASD',
];

const GEO = {
	'@type': 'GeoCoordinates',
	latitude: CONTACT.latitude,
	longitude: CONTACT.longitude,
};

/**
 * The two JSON-LD blocks the old site emitted on every page, byte-for-byte
 * identical across all of them, so they live here instead of in each page.
 */
export const STRUCTURED_DATA = [
	{
		'@context': 'http://schema.org',
		'@type': 'SportsClub',
		name: 'Deep Diving Udine A.S.D.',
		description:
			'Vuoi fare un corso sub in Friuli Venezia Giulia? Visita il nostro sito, troverai tutte le informazioni utili per iniziare la tua magica avventura nella subacquea! Brevetti per principianti, corsi avanzati e tecnici e tante immersioni.',
		image: [
			`${SITE_URL}/files/theme/CorsoSubUdine.webp`,
			`${SITE_URL}/files/theme/BrevettosubUdine.webp`,
			`${SITE_URL}/uploads/corsi-brevetti-sub-udine-friuli_orig.webp`,
		],
		'@id': `${SITE_URL}/`,
		url: `${SITE_URL}/`,
		telephone: CONTACT.phone,
		priceRange: '€200-500',
		address: {
			'@type': 'PostalAddress',
			streetAddress: CONTACT.street,
			addressLocality: CONTACT.city,
			postalCode: CONTACT.postalCode,
			addressCountry: CONTACT.country,
		},
		geo: GEO,
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Friday',
			opens: '19:30',
			closes: '20:30',
		},
		sameAs: SAME_AS,
	},
	{
		'@context': 'http://schema.org',
		'@type': 'Organization',
		name: 'Deep Diving Udine A.S.D.',
		alternateName: 'Corsi sub a Udine, Friuli',
		url: `${SITE_URL}/`,
		logo: `${SITE_URL}/uploads/deepdivingudine_orig.webp`,
		image: `${SITE_URL}/uploads/corsi-brevetti-sub-udine-friuli_orig.webp`,
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: CONTACT.phone,
			contactType: 'customer service',
			areaServed: 'IT',
			availableLanguage: ['English', 'Italian'],
		},
		geo: GEO,
		sameAs: SAME_AS,
	},
];
