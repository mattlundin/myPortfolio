<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '../../gsap.js';

	// export let data;
	// export let errors;

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
				'.project-box',
				{
					opacity: 0,
					y: -200,
					duration: 0.8,
					// scale: 0.1,
					stagger: 0.3,
					ease: 'Power1.out'
				},
				'-=.5'
			)
			.from('.fa-github', {
				opacity: 0,
				duration: 1
			});
	});
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<main class="pb-14">
	<header
		class="flex justify-center items-center md:mx-auto mx-3 mb-24 h-36 max-w-3xl bg-darkBlue rounded-b-3xl border-none -z-10 shadow-xl overflow-hidden"
	>
		<h1 class="my-auto font-rubikDirt xs:text-7xl text-6xl text-offWhite">Projects</h1>
	</header>

	<div class="projects-container flex justify-center flex-wrap pt-8 px-2 gap-8 -z-10">
		<div class="project-box w-[480px] shadow-lg shadow-darkBlue cursor-pointer">
			<a href="/Projects/ElevateLNC">
				<img
					src="/images/ElevateLNC.webp"
					alt="Elevate LNC"
					class="h-full w-full hover:scale-105 hover:shadow-medBlue shadow-lg transition ease duration-300"
				/>
			</a>
		</div>
		<div class="project-box w-[480px] shadow-lg shadow-darkBlue cursor-pointer">
			<a href="/Projects/QuintsArt">
				<img
					src="/images/QuintsArt.webp"
					alt="Quints Art"
					class="h-full w-full hover:scale-105 hover:shadow-medBlue shadow-lg transition ease duration-300"
				/>
			</a>
		</div>
		<div class="project-box w-[480px] shadow-lg shadow-darkBlue cursor-pointer">
			<a href="/Projects/Skate-Co">
				<img
					src="/images/Skate-Co.webp"
					alt="Skate-Co"
					class="h-full w-full hover:scale-105 hover:shadow-medBlue shadow-lg transition ease duration-300"
				/>
			</a>
		</div>
		<div class="project-box w-[480px] shadow-lg shadow-darkBlue cursor-pointer">
			<a href="/Projects/Svelte-Dictionary-App">
				<img
					src="/images/svelte-dictionary-app.webp"
					alt="Svelte Dictionary"
					class="h-full w-full hover:scale-105 hover:shadow-medBlue shadow-lg transition ease duration-300"
				/>
			</a>
		</div>
	</div>
	<div class="mt-24 text-6xl text-center text-darkBlue">
		<a href="https://github.com/mattlundin"
			><i
				class="fa-brands fa-github hover:text-lightBlue hover:scale-125 hover:rotate-180 transition ease duration-300"
			/></a
		>
	</div>
</main>
