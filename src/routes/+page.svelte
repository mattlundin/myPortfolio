<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '../gsap';

	// export let data;
	// export let errors;

	onMount(() => {
		gsap.to('.slide-right', {
			opacity: 1,
			// x: 0,
			marginLeft: 0,
			duration: 1.2,
			stagger: 0.5,
			ease: 'back.out(4.7)'
		});
		gsap.from('.fade-in', {
			opacity: 0,
			duration: 2,
			delay: 1.1,
			rotation: 360 * 5,
			stagger: 0.4,
			ease: 'none'
		});
		let tl = gsap.timeline({ duration: 2 });
		tl.to('.creative', {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			opacity: 0,
			duration: 2.3
		})
			.from(
				'.front',
				{
					y: -100,
					opacity: 0,
					duration: 3,
					ease: 'elastic.out(2.7)'
				},
				'-=.9'
			)
			.from(
				'.end',
				{
					y: 100,
					opacity: 0,
					duration: 3,
					ease: 'elastic.out(2.7)'
				},
				'-=2.8'
			)
			.from(
				'.down',
				{
					y: 200,
					opacity: 0,
					duration: 2,
					stagger: 0.3,
					perspective: 400,
					rotationX: 360,
					ease: 'elastic.out'
				},
				'-=2.3'
			)
			.from(
				'.up',
				{
					y: -200,
					opacity: 0,
					duration: 2,
					stagger: 0.3,
					perspective: 400,
					rotationX: 180,
					ease: 'elastic.out'
				},
				'-=3.3'
			)
			.to(
				'.grow',
				{
					scale: 1.2,
					duration: 1.2,
					stagger: 0.2,
					ease: 'bounce.out'
				},
				'-=2'
			);
	});
</script>

<svelte:head>
	<title>Matt Lundin</title>
</svelte:head>

<main class="h-[calc(100vh-80px)] overflow-hidden">
	<div class="name pt-12 xs:pl-12 pl-4">
		<p class="slide-right opacity-0 ml-[-300px] sm:text-8xl text-7xl text-darkBlue">
			<span class="fade-in sm:text-[160px] text-[140px] text-medBlue font-inspiration">M</span>ATT
		</p>
		<p class="slide-right opacity-0 ml-[-300px] sm:text-8xl text-7xl text-darkBlue">
			<span class="fade-in sm:text-[160px] text-[140px] text-medBlue font-inspiration">L</span>UNDIN
		</p>
	</div>
	<div class="hidden md:block absolute bottom-0 right-0">
		<img src="/images/look-left-transparent.png" alt="" class="fixed bottom-0 right-0 h-56 w-56" />
	</div>
	<div class="block md:hidden absolute bottom-0 right-0">
		<img src="/images/look-up-transparent.png" alt="" class="fixed bottom-0 right-0 h-44 w-44" />
	</div>

	<div class="relative sm:ml-12 ml-4 mt-12">
		<div
			class="creative absolute xs:ml-12 ml-4 text-medBlue sm:text-7xl text-6xl font-rubikDirt clip-path-polygon-[0_0,_0_0,_0_100%,_0_100%]"
		>
			CR<span class="text-darkBlue">E</span>AT<span class="text-darkBlue">I</span>VE
		</div>
		<div class="absolute flex xs:text-5xl text-3xl">
			<div class="front-end flex flex-row">
				<div class="front flex flex-row mr-3">
					<div class="grow">F</div>
					ront
				</div>
				<div class="end flex flex-row">
					<div class="grow">E</div>
					nd
				</div>
			</div>
			<!-- <div>&nbsp;&nbsp;</div> -->
			<div class="developer flex flex-row ml-3 text-medBlue">
				<div class="down"><div class="grow">D</div></div>
				<div class="up">e</div>
				<div class="down">v</div>
				<div class="up">e</div>
				<div class="down">l</div>
				<div class="up">o</div>
				<div class="down">p</div>
				<div class="up">e</div>
				<div class="down">r</div>
			</div>
		</div>
	</div>
</main>
