/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		// default options are shown
		adapter: vercel({
			// if true, will deploy the app using edge functions
			// (https://vercel.com/docs/concepts/functions/edge-functions)
			// rather than serverless functions
			edge: false,

			// an array of dependencies that esbuild should treat
			// as external when bundling functions
			external: [],

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		})
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
