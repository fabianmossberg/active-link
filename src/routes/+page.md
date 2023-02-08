# Active Link

A SvelteKit action that lets you target active links, as well as descendants or ancestors of the active link.

For a demo, look at the menu on this page.

## It does


## It doesnt
- Consider every URL to be a descendant of "/"
- Does not 

## Usage

Import activeLink.

```svelte
<script>
    import { activeLink } from '@fabianmossberg/active-link';
    import '../app.css';
</script>
```


### Using a DaisyUI

Pass multiple classes that you want to apply 

```svelte
<script lang="ts">
	import { activeLink } from '$lib/active';
</script>

<div class="tabs tabs-boxed" use:activeLink={{ CURRENT: 'tab-active hover:bg-yellow-400' }}>
	<a href="/" class="tab tab-lg tab-lifted">Home</a>
	<a href="/dogs" class="tab tab-lg tab-lifted ">A</a>
	<a href="/cats" class="tab tab-lg tab-lifted">Cats</a>
</div>
```

### Removing the ACTIVE class

Pass an empty string as the class you don't want to use.

```svelte
<div use:activeLink={{ACTIVE: ''}}>
    <a href="/">Home</a>
    <a href="/login">Log in</a>
    <a href="/about">About</a>
</div>
```

## Add styling

