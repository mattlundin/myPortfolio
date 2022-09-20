<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '../../gsap.js';

	// export let data;
	// export let errors;

	let matches;

	const technologies = [
		{ img: '/images/html-logo.png', alt: 'HTML5', css: '' },
		{ img: '/images/css-logo.png', alt: 'CSS3', css: '' },
		{ img: '/images/js-logo.png', alt: 'JavaScript', css: '' },
		{ img: '/images/svelte-logo.png', alt: 'Svelte', css: '' },
		{ img: '/images/GSAP-logo.png', alt: 'GSAP', css: '' },
		{ img: '/images/tailwind-logo.png', alt: 'Tailwind', css: 'object-cover mt-6' },
		{ img: '/images/scss-logo.png', alt: 'SCSS', css: 'h-full w-full object-contain' },
		{ img: '/images/npm-logo.png', alt: 'NPM', css: 'mt-3' },
		{ img: '/images/github-logo.png', alt: 'Github', css: '' }
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let tl = gsap.timeline({});
		tl.from('header', {
			y: -200,
			duration: 0.6,
			ease: 'none'
		})
			.from(
				'header h1',
				{
					y: 200,
					duration: 0.7,
					opacity: 0,
					ease: 'none'
				},
				'-=.4'
			)
			.from(
				'.hello',
				{
					x: -200,
					stagger: 0.1,
					scale: 0.1,
					opacity: 0,
					perspective: 400,
					rotationX: 720,
					ease: 'elastic.out',
					duration: 2,
					delay: 0.8
				},
				'-=1'
			)
			.from(
				'.fade-in',
				{
					opacity: 0,
					duration: 1.8
				},
				'-=3'
			)
			// .from(
			// 	'.tech-title span',
			// 	{
			// 		scrollTrigger: {
			// 			trigger: '.tech-title',
			// 			start: '10px, 85%'
			// 		},
			// 		x: 400,
			// 		opacity: 0,
			// 		duration: 0.5,
			// 		stagger: 0.2,
			// 		ease: 'back.out'
			// 	},
			// 	'-=3.5'
			// )
			.from(
				'.img-container',
				{
					opacity: 0,
					duration: 0.8,
					ease: 'Power1.out'
				},
				'-=2.8'
			);
		gsap.from(
			'.tech-title span',
			{
				scrollTrigger: {
					trigger: '.tech-title',
					start: '10px, 85%'
				},
				x: 400,
				color: 'rgba(0,0,0,0.1)',
				opacity: 0,
				duration: 2,
				// delay: 1,
				stagger: 0.2,
				ease: 'back.out'
			},
			'-=2.5'
		);
		gsap.from(
			'.img-box',
			{
				scale: 0.1,
				opacity: 0,
				duration: 0.8,
				rotation: 90,
				ease: 'Bounce.out',
				stagger: 0.2
				// repeat: -1
			},
			'-=1.8'
		);

		ScrollTrigger.refresh();
	});
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main class="h-full min-h-[calc(100vh-80px)] max-w-screen-2xl mx-auto">
	<header
		class="flex justify-center items-center text-center md:mx-auto mx-3 mb-24 h-36 max-w-3xl bg-darkBlue rounded-b-3xl border-none -z-10 shadow-xl overflow-hidden"
	>
		<h1 class="my-auto font-rubikDirt xs:text-7xl text-6xl text-offWhite">About Me</h1>
	</header>

	<!-- add transition/animations slide in from left, letter by letter, then bounce up and spin 360 -->
	<div class="flex md:flex-row flex-col px-3 pb-4 gap-12">
		<div class="md:w-1/2 w-full">
			<div class="flex flex-row items-center justify-center text-5xl pb-8">
				<div class="hello">H</div>
				<div class="hello">e</div>
				<div class="hello">l</div>
				<div class="hello">l</div>
				<div class="hello">o</div>
				<div class="hello">&nbsp;</div>
				<div class="hello">W</div>
				<div class="hello">o</div>
				<div class="hello">r</div>
				<div class="hello">l</div>
				<div class="hello">d</div>
			</div>

			<div class="fade-in">
				<p class="mb-2">
					My name is Matt and I am a Front End Developer living in Texas. I have been developing for
					over 2 years and during that time, I have created quite an obsession with animations and
					transitions. I believe giving projects that extra little finesse can make the biggest
					difference to help keep visitor's attention where it should be, the site they're visiting.
				</p>
				<p>
					I am constantly learning and striving to do better in every single project I take on. With
					numerous tools to build with I focus on not only functionality, but simplicity as well. I
					enjoy experimenting and finding ways to continuously improve and cut down my development
					time while giving optimum results.
				</p>
				<!-- <p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem maxime assumenda
					accusantium laudantium voluptas! Corrupti at expedita porro commodi voluptatum quisquam
					nam molestias neque, quaerat, dolorum ea? Facere accusamus id in temporibus? Dolorem modi
					reiciendis quibusdam. Consequuntur veritatis distinctio blanditiis. Aliquam numquam quia
					consectetur inventore vitae illum maiores, cum aperiam.
				</p> -->
			</div>
		</div>
		<div class="md:w-1/2 h-full w-full pb-12">
			<h2 class="tech-title flex justify-center flex-row flex-wrap text-center text-3xl">
				<span>What</span>&nbsp;
				<span>I'm</span>&nbsp;
				<span>Currently</span>&nbsp;
				<span>Working</span>&nbsp;
				<span>With</span>
			</h2>
			<div
				class="img-container flex flex-wrap justify-around items-center h-full my-4 p-6 gap-4 bg-darkBlue rounded-lg shadow-xl shadow-black overflow-hidden"
			>
				{#each technologies as { img, alt, css }}
					<div class="img-box h-32 w-32 p-1 shadow-sm shadow-black">
						<img src={img} {alt} class={css} on:click />
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>
