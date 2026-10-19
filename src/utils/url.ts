/**
 * Prefixes a root-relative path (e.g. '/uploads/foo.png', or '/' for the
 * home page) with Astro's base path, so every internal link keeps working
 * whether the site is served at the domain root or under a GitHub Pages
 * project subpath like '/deepdivingudine'.
 *
 * Astro sets `import.meta.env.BASE_URL` from `base` in astro.config.mjs, or
 * — as the deploy workflow does — from `astro build --base <path>`. It is
 * NOT guaranteed to carry a trailing slash (e.g. `--base "/deepdivingudine"`
 * comes through exactly like that), so this strips one if present before
 * joining, rather than assuming the format.
 *
 * Nothing here needs to change when the site moves from the GitHub Pages
 * subpath to the real domain: the workflow passes an empty base once a
 * custom domain is configured, and every path below adapts automatically.
 */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return base + path;
}
