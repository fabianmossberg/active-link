# On single links

```svelte
<script>
    import { activeLink } from '@fabianmossberg/active-link';
    import '../app.css';
</script>

<a href="/computers/atari/falcon" use:activeLink>Atari Falcon</a>
```

The above code will result in the following classes.


#### `https://example.com/`
```html
<a href="/computers/atari/falcon" class="">Atari Falcon</a>
```

#### **`https://example.com/computers`**
```html
<a href="/computers/atari/falcon" class="descendant current">Atari Falcon</a>
```

#### **`https://example.com/computers/atari`**
```html
<a href="/computers/atari/falcon" class="active current">Atari Falcon</a>
```

#### **`https://example.com/computers/atari/falcon`**
```html
<a href="/computers/atari/falcon" class="ancestor current">Atari Falcon</a>
```