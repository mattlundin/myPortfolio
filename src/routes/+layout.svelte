<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';

	// export let data;
	// export let errors;

	export const prerender = false;
</script>

<Nav />
<div class="pt-20" />
<slot><!-- optional fallback --></slot>
