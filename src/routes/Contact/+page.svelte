<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '../../gsap.js';

	// export let data;
	// export let errors;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let tl = gsap.timeline({});
		tl.from('header', {
			y: -100,
			duration: 0.4,
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
				'.fade-down',
				{
					y: -200,
					opacity: 0,
					duration: 1,
					scale: 0.1,
					ease: 'Power3.out'
				},
				'-=.3'
			)
			.from(
				'.fade-right',
				{
					x: -200,
					opacity: 0,
					duration: 1,
					ease: 'Power3.out'
				},
				'-=.5'
			)
			.from(
				'.fade-left',
				{
					x: 200,
					opacity: 0,
					duration: 1,
					ease: 'Power3.out'
				},
				'-=1'
			)
			.from(
				'.fade-up',
				{
					y: 200,
					opacity: 0,
					duration: 1,
					ease: 'Power3.out',
					stagger: 0.5
				},
				'-=1'
			)
			.from(
				'.fade-in',
				{
					scale: 0.1,
					opacity: 0,
					duration: 1,
					ease: 'Power3.out'
				},
				'-=.5'
			);
	});
</script>

<svelt:head>
	<title>Contact</title>
</svelt:head>

<main>
	<header
		class="flex justify-center items-center md:mx-auto mx-3 mb-24 h-36 max-w-3xl bg-darkBlue rounded-b-3xl border-none z-30 shadow-xl overflow-hidden"
	>
		<h1 class="my-auto font-rubikDirt xs:text-7xl text-6xl text-offWhite">Contact</h1>
	</header>

	<p class="fade-down text-center max-w-screen-lg mx-auto pb-5 md:px-10 px-4 -z-40">
		Have a project or opportunity you want to present? Please feel free to reach out via the contact
		form or email me directly: <a href="mailto:matt@mattdevelops.us" class="text-medBlue"
			>matt@mattdevelops.us</a
		>
	</p>

	<div class="flex justify-center p-6 overflow-hidden">
		<form class="w-full max-w-lg">
			<div class="flex flex-wrap -mx-3 mb-2">
				<div class="fade-right w-full md:w-1/2 px-3 mb-2 md:mb-0">
					<label class="block uppercase tracking-wide mb-2" for="grid-first-name">
						First Name
					</label>
					<input
						class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-lightBlue transition ease duration-200"
						id="grid-first-name"
						type="text"
					/>
				</div>
				<div class="fade-left w-full md:w-1/2 px-3">
					<label class="block uppercase tracking-wide mb-2" for="grid-last-name"> Last Name </label>
					<input
						class="appearance-none block w-full border rounded py-3 px-4 leading-tight focus:outline-none focus:border-lightBlue transition ease duration-200"
						id="grid-last-name"
						type="text"
					/>
				</div>
			</div>
			<div class="fade-up flex flex-wrap -mx-3 mb-2">
				<div class="w-full px-3">
					<label class="block uppercase tracking-widemb-2" for="grid-password"> E-mail </label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-lightBlue transition ease duration-200"
						id="email"
						type="email"
					/>
				</div>
			</div>
			<div class="fade-up flex flex-wrap -mx-3 mb-2">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide mb-2" for="grid-password"> Message </label>
					<textarea
						class="appearance-none block w-full border border-darkBlue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-lightBlue h-48 transition ease duration-200"
						id="message"
					/>
				</div>
			</div>
			<div class="fade-in md:flex md:items-center">
				<div class="md:w-1/3">
					<button
						class="bg-darkBlue focus:shadow-outline focus:outline-none hover:scale-105 hover:tracking-wide shadow-md shadow-black hover:shadow-black hover:shadow-lg text-white py-2 px-4 rounded transition ease duration-200"
						type="button"
					>
						Send
					</button>
				</div>
				<div class="md:w-2/3" />
			</div>
		</form>
	</div>
</main>
