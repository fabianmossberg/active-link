# Active Link

A Svelte Action that lets you style links. Use it on a wrapping element. It targets all `<a>`-tags inside it and add data-attributes to links inside the wrapping element.

Why it's awesome:

- Does not think `/carbon` is a descendant of `/car`
- Let's you style both the **active** link, it's **descendants** and it's **ancestors**.

## Installation

```sh
pnpm add --save-dev npm i @fabianmossberg/active-link
```

## Usage

Import the action and it on an element wrapping the links.

```svelte
<script lang="ts">
    import { activeLink } from '@fabianmossberg/active-link';
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
/* Will be applied the active link as well as it's descendant and ancestors */
[data-active] {
    background-color: yellow;
}

/* Will be applied to the active link */
[data-active="active"] {
    color: black;
	border:2px solid red;
    font-weight: 900;
}

/* Will be applied to links that are ancestors of the active link. */
[data-active="ancestor"] {
    color: rgb(172, 86, 52);
}

/* Will be applied to links that are decendants of the active link. */
[data-active="descendant"] {
    color: rgb(55, 84, 211);
}