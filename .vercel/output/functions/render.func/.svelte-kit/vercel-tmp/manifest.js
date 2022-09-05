export const manifest = {
	appDir: "_app",
	assets: new Set(["images/ElevateLNC.webp","images/GSAP-logo.png","images/QuintsArt.webp","images/Skate-Co.webp","images/css-logo.png","images/favicon.png","images/github-logo.png","images/html-logo.png","images/js-logo.png","images/look-left-transparent.png","images/look-up-transparent.png","images/npm-logo.png","images/scss-logo.png","images/svelte-dictionary-app.webp","images/svelte-logo.png","images/tailwind-logo.png"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-5ddcef3f.js","imports":["_app/immutable/start-5ddcef3f.js","_app/immutable/chunks/index-3f9041d7.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			},
			{
				type: 'page',
				id: "About",
				pattern: /^\/About\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "Contact",
				pattern: /^\/Contact\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			},
			{
				type: 'page',
				id: "Projects",
				pattern: /^\/Projects\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 5
			},
			{
				type: 'page',
				id: "Projects/ElevateLNC",
				pattern: /^\/Projects\/ElevateLNC\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 6
			},
			{
				type: 'page',
				id: "Projects/QuintsArt",
				pattern: /^\/Projects\/QuintsArt\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 7
			},
			{
				type: 'page',
				id: "Projects/Skate-Co",
				pattern: /^\/Projects\/Skate-Co\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 8
			},
			{
				type: 'page',
				id: "Projects/Svelte-Dictionary-App",
				pattern: /^\/Projects\/Svelte-Dictionary-App\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 9
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
