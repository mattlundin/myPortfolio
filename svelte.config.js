/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
		// prerender: {
		// 	default: true
		// }
	}
	// kit: {
	// 	adapter: adapter({
	// 		prerender: {
	// 			default: true
	// 		},
	// 		pages: 'build',
	// 		assets: 'build',
	// 		images: 'build',
	// 		precompress: false,
	// 		fallback: '200.html'
	// 	})
	// }
};

export default config;
