<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '../../gsap.js';

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
				'.fade-down',
				{
					y: -200,
					opacity: 0,
					duration: 1,
					scale: 0.1,
					ease: 'Power3.out'
				},
				'-=.8'
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
		Have a project or opportunity you want to present? Please feel free to reach out through the
		contact form or email me directly: <a href="mailto:matt@mattdevelops.us" class="text-medBlue"
			>matt@mattdevelops.us</a
		>
	</p>

	<div class="flex justify-center p-6 overflow-hidden">
		<form
			class="w-full max-w-lg"
			action="https://formsubmit.co/a6a18660737be7454478ebf94f7ed81b"
			method="POST"
			target="_blank"
		>
			<div class="flex flex-wrap -mx-3 mb-2">
				<div class="fade-up w-full px-3">
					<label class="block uppercase tracking-wide mb-2" for="name"> Full Name </label>
					<input
						class="appearance-none block w-full border rounded py-3 px-4 leading-tight focus:outline-none focus:border-lightBlue transition ease duration-200"
						id="name"
						type="text"
						name="name"
					/>
				</div>
			</div>
			<div class="fade-up flex flex-wrap -mx-3">
				<div class="w-full px-3">
					<label class="block uppercase tracking-widemb-2" for="grid-password"> E-mail </label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-lightBlue transition ease duration-200"
						id="email"
						type="email"
						name="email"
					/>
				</div>
			</div>
			<div class="fade-up flex flex-wrap -mx-3 mb-2">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide mb-2" for="grid-password"> Message </label>
					<textarea
						class="appearance-none block w-full border border-darkBlue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-lightBlue h-48 transition ease duration-200"
						id="message"
						name="message"
						target="_blank"
					/>
				</div>
			</div>
			<div class="fade-in md:flex md:items-center">
				<div class="md:w-1/3">
					<button
						class="bg-darkBlue focus:shadow-outline focus:outline-none hover:scale-105 hover:tracking-wide shadow-md shadow-black hover:shadow-black hover:shadow-lg text-white py-2 px-4 rounded transition ease duration-200"
						type="submit">Send</button
					>
				</div>
				<div class="md:w-2/3" />
			</div>
		</form>
	</div>
</main>
