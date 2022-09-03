<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';

	// export let data;
	// export let errors;

	export const prerender = true;
</script>

<Nav />
<div class="pt-20" />
<slot><!-- optional fallback --></slot>
