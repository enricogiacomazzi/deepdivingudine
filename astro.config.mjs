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
			// The integration ignores build.format and emits /apnea, but the
			// page is served at /apnea.html — put the extension back.
			serialize(item) {
				const url = new URL(item.url);
				if (url.pathname !== '/') {
					url.pathname = `${url.pathname.replace(/\/$/, '')}.html`;
					item.url = url.href;
				}
				return item;
			},
		}),
	],
});
