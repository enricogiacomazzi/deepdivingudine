// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://www.deepdivingudine.it',
	// 'file' keeps the legacy URLs: /chi-siamo.html instead of /chi-siamo/.
	build: { format: 'file' },
	compressHTML: false,
	integrations: [
		sitemap({
			// The integration ignores build.format and emits extensionless
			// URLs (/apnea), but the page is served at /apnea.html — put the
			// extension back. The home page is the only route whose URL
			// always ends in '/', regardless of base path, so that (not
			// comparing the full pathname) is what tells it apart from
			// every other page.
			serialize(item) {
				const url = new URL(item.url);
				if (!url.pathname.endsWith('/')) {
					url.pathname = `${url.pathname}.html`;
					item.url = url.href;
				}
				return item;
			},
		}),
	],
});
