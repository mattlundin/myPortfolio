<script>
	import MobileNav from '../components/MobileNav.svelte';
</script>

<nav
	class="fixed w-full flex items-center h-20 w-100 px-5 bg-darkBlue text-offWhite overflow-hidden z-40"
>
	<div class="icon">
		<h1
			class="font-inspiration hover:scale-125 text-offWhite hover:text-lightBlue transition ease duration-200 text-5xl"
		>
			<a href="/">ML</a>
		</h1>
	</div>
	<ul class="hidden sm:flex items-center nav-list ml-auto text-offWhite text-2xl">
		<li class="p-2 hover:text-lightBlue transition hover:scale-125 ease duration-200">
			<a href="/">Home</a>
		</li>
		<li class="p-2 hover:text-lightBlue transition hover:scale-125 ease duration-200">
			<a href="/About">About</a>
		</li>
		<li class="p-2 hover:text-lightBlue transition hover:scale-125 ease duration-200">
			<a href="/Projects">Projects</a>
		</li>
		<li class="p-2 hover:text-lightBlue transition hover:scale-125 ease duration-200">
			<a href="/Contact">Contact</a>
		</li>
	</ul>
</nav>

<MobileNav />
