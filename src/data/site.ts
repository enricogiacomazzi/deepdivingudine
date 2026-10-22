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
		url: 'https://www.facebook.com/corsisubudine',
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

/**
 * The schema.org description of the club, emitted as JSON-LD on every page.
 * SportsClub is already an Organization (via LocalBusiness), so one entity
 * carries both the local-business fields (address, geo, opening hours) and
 * the organization ones (logo, contact point).
 */
export const STRUCTURED_DATA = {
	'@context': 'https://schema.org',
	'@type': 'SportsClub',
	'@id': `${SITE_URL}/`,
	name: 'Deep Diving Udine A.S.D.',
	alternateName: 'Corsi sub a Udine, Friuli',
	description:
		'Vuoi fare un corso sub in Friuli Venezia Giulia? Visita il nostro sito, troverai tutte le informazioni utili per iniziare la tua magica avventura nella subacquea! Brevetti per principianti, corsi avanzati e tecnici e tante immersioni.',
	url: `${SITE_URL}/`,
	logo: `${SITE_URL}/uploads/deepdivingudine_orig.webp`,
	image: [
		`${SITE_URL}/files/theme/CorsoSubUdine.webp`,
		`${SITE_URL}/files/theme/BrevettosubUdine.webp`,
		`${SITE_URL}/uploads/corsi-brevetti-sub-udine-friuli_orig.webp`,
	],
	telephone: CONTACT.phone,
	email: CONTACT.email,
	priceRange: '€200-500',
	address: {
		'@type': 'PostalAddress',
		streetAddress: CONTACT.street,
		addressLocality: CONTACT.city,
		postalCode: CONTACT.postalCode,
		addressCountry: CONTACT.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: CONTACT.latitude,
		longitude: CONTACT.longitude,
	},
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: 'Friday',
		opens: '19:30',
		closes: '20:30',
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: CONTACT.phone,
		contactType: 'customer service',
		areaServed: 'IT',
		availableLanguage: ['English', 'Italian'],
	},
	sameAs: SOCIAL.map((link) => link.url),
};
