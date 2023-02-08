<script lang="ts">
	import '../site.postcss';
	import '../active-link.postcss';
	import '$lib/prism-lucario.css';
	import { activeLink } from '$lib/active';
    import Top from './Top.svelte'
</script>

<Top />

<div class="wrapper">
	<div class="menu">
		<ul use:activeLink class="active-link">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/get-started">Get started</a>
				<ul>
					<li>
						<a href="/get-started/single-element">Single element</a>
					</li>
					<li>
						<a href="/get-started/wrapper">Wrapper</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/options">Options</a>
			</li>
		</ul>
	</div>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-grow: 1;
	}
	.menu {
		padding: 0.875rem;
		/* background-color: red;; */
	}
	.content {
		padding: 0.875rem;
		flex-grow: 1;

		max-width: 768px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	ul ul {
		margin-left: 1rem;
	}
</style>
