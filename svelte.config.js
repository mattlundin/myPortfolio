/** @type {import('@sveltejs/kit').Config} */

import vercel from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	}
	// kit: {
	// 	adapter: adapter({
	// 		fallback: '200.html',
	// 		pages: 'build',
	// 		assets: 'build',
	// 		precompress: false
	// 	}),
	// 	prerender: { entries: [] }
	// }
};

export default config;
