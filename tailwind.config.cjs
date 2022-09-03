/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inspiration: ['Inspiration', 'cursive'],
				rubikDirt: ['Rubik Dirt', 'cursive']
			}
		},
		screens: {
			xs: '530px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		colors: {
			darkBlue: '#002A42',
			darkBlueOpac: '#002A42ef',
			medBlue: '#005d93',
			lightBlue: '#00a2ff',
			blueGray: '#bbc8d0',
			offWhite: '#e6e6e6',
			black: '#000000',
			opacBlack: 'rgba(0,0,0,0.8)',
			white: '#ffffff'
		}
	},
	plugins: [require('tailwind-clip-path')]
};
