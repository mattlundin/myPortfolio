<script>
	import { onMount } from 'svelte';
	import { gsap } from '../gsap';

	export let projectName;
	export let projectImg;
	export let projectImgAlt;
	export let projectDescription;
	export let projectURL;
	export let projectGitHub;

	onMount(() => {
		let tl = gsap.timeline({});

		tl.from('.fade-down', {
			opacity: 0,
			duration: 1,
			y: -100,
			ease: 'power1.out'
		})
			.from(
				'.fade-right',
				{
					opacity: 0,
					duration: 1,
					x: -100,
					ease: 'power1.out'
				},
				'-=.5'
			)
			.from(
				'.fade-left',
				{
					opacity: 0,
					duration: 1,
					x: 100,
					ease: 'power1.out'
				},
				'-=1'
			)
			.from(
				'.fade-up',
				{
					opacity: 0,
					duration: 1,
					y: 100,
					ease: 'power1.out'
				},
				'-=.8'
			);
	});
</script>

<div class="flex items-center">
	<div
		class="lg:w-11/12 lg:mx-auto h-full w-full max-w-screen-2xl bg-opacBlack my-12 mx-2 border-2 border-lightBlue rounded-md overflow-hidden"
	>
		<div class="fade-down text-5xl text-center pt-8 text-offWhite">{projectName}</div>
		<div class="flex lg:flex-row md:p-12 md:gap-12 justify-between flex-col h-full p-4">
			<img
				src={projectImg}
				alt={projectImgAlt}
				class="fade-right h-auto max-h-[480px] lg:w-1/2 w-100"
			/>
			<div class="md:mt-0 mt-8 fade-left text-offWhite lg:w-1/2">
				{projectDescription}
			</div>
		</div>
		<div
			class="fade-up bottom-8 flex items-center justify-around pb-12 w-full text-xl text-offWhite"
		>
			<a
				href={projectURL}
				class="text-2xl underline hover:text-lightBlue hover:scale-125 transition ease duration-300"
				target="_blank">Site</a
			>
			<a
				href={projectGitHub}
				class="text-2xl underline hover:text-lightBlue hover:scale-125 transition ease duration-300"
				target="_blank">Github</a
			>
		</div>
	</div>
</div>
