# Active Link

A Svelte Action that lets you style links. Use it on a wrapping element. It targets all `<a>`-tags inside it and add data-attributes to links inside the wrapping element.

|What|Attribute|Target with|
|-|-|-|
|All links in the wrapping element.|`data-active`|`[data-active]{ /* Style */ }`|
|Ancestors to the current page.|`data-active="ancestor"`|`[data-active="ancestor"]{ /* Style */ }`|
|Descendants of the current page|`data-active="descendant"`|`[data-active="descendant"]{ /* Style */ }`|



## Usage

Import the action.


Use it on the wrapping element.

```svelte
<script lang="ts">
    import { activeLink } from '@fabianmossberg/active-link';
    import '../app.css'; // Or whatever your css-file is called.
</script>

<ul use:activeLink>
	<li><a href="/">Home</a></li>
	<li>
		<a href="/a">A</a>
		<ul>
			<li><a href="/a/aa">AA</a></li>
		</ul>
	</li>
	<li><a href="/b">B</a></li>
	<li><a href="/car">Car</a></li>
	<li><a href="/car/tesla">Tesla</a></li>
	<li><a href="/carbon">Carbon</a></li>
	<li><a href="/b" data-never-active>B</a></li>
</ul>
```

Style it with css
```css
/* src/lib/app.css */

[data-active] {
    color: red; // Will be applied to all links inside the wrapper.
}
[data-active="ancestor"] {
    color: green; // Will be applied to ancestors of the active element.
}
[data-active="descendant"] {
    color: blue; // Will be applied to decendants of the active element.
}
```
