<script lang="ts">
	import { activeLink } from '$lib/active';
	import '../app.css';
</script>

<h1>Demo</h1>

<ul use:activeLink>
	<li><a href="/">Home</a></li>
	<li>
		<a href="/a">A</a>
		<ul>
			<li><a href="/a/aa">AA</a>
			<ul>
				<li><a href="/a/aa/fabian">Fabian</a></li>
			</ul></li>
		</ul>
	</li>
	<li><a href="/b">B</a></li>
	<li><a href="/car">Car</a></li>
	<li><a href="/carbon">Carbon</a></li>
	<li><a href="/b" data-never-active>B that will never look active</a></li>
</ul>

<slot />
