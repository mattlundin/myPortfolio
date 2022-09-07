<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { quintInOut, bounceInOut } from 'svelte/easing';
	import vh from './MobileToolbar.js';

	let isOpen = false;
	let isMenuRendered;

	$: {
		if (isOpen) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}
	}
</script>

<div class="sm:hidden">
	<button
		class="fixed top-5 right-5 z-50"
		aria-label="Toggle menu"
		type="button"
		on:click={() => (isOpen = !isOpen)}
	>
		{#if !isOpen}
			<svg
				style="width:40px;height:40px;color:white;"
				viewBox="0 0 24 24"
				class="fixed right-5 text-offWhite"
				transition:scale
			>
				<path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
			</svg>
			<!-- <i class="fa-solid fa-bars text-3xl text-gray-300" /> -->
		{:else}
			<svg
				style="width:40px;height:40px;"
				viewBox="0 0 24 24"
				class="fixed right-5 text-offWhite"
				transition:scale
			>
				<path
					fill="currentColor"
					d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
				/>
			</svg>
			<!-- <i class="fa-solid fa-xmark text-3xl text-gray-300" /> -->
		{/if}
	</button>

	{#if isOpen}
		<nav
			class="fixed bottom-0 flex flex-col px-4 bg-darkBlueOpac text-offWhite h-[calc(var(--vh, 1vh) * 100 - 80px)] w-full overflow-hidden z-40"
			in:fly={{ delay: 0, duration: 300, x: -800 }}
			out:fly={{ delay: 50, duration: 100, x: -800, opacity: 0 }}
		>
			<!-- h-[calc(100%-80px)] -->
			<ul
				class="flex flex-col items-center justify-center gap-2 mtpy-12 text-offWhite text-2xl overflow-hidden"
				class:menuRendered={isMenuRendered}
			>
				<li class="font-regular font-display" style="transition-delay: 150ms;">
					<a
						class="flex w-auto items-center justify-start gap-4 py-4 px-2"
						on:click={() => setTimeout(() => (isOpen = false), 200)}
						transition:scale={{ delay: 100, duration: 500 }}
						href="/">Home</a
					>
				</li>
				<li class="font-regular font-display" style="transition-delay: 150ms;">
					<a
						class="flex w-auto items-center justify-start gap-4 py-4 px-2"
						on:click={() => setTimeout(() => (isOpen = false), 200)}
						transition:scale={{ delay: 200, duration: 500 }}
						href="/About">About</a
					>
				</li>
				<li class="font-regular font-display" style="transition-delay: 150ms;">
					<a
						class="flex w-auto items-center justify-start gap-4 py-4 px-2"
						on:click={() => setTimeout(() => (isOpen = false), 200)}
						transition:scale={{ delay: 300, duration: 500 }}
						href="/Projects">Projects</a
					>
				</li>
				<li class="font-regular font-display" style="transition-delay: 150ms;">
					<a
						class="flex w-auto items-center justify-start gap-4 py-4 px-2"
						on:click={() => setTimeout(() => (isOpen = false), 200)}
						transition:scale={{ delay: 300, duration: 500 }}
						href="/Contact">Contact</a
					>
				</li>
			</ul>
		</nav>
	{/if}
</div>
