
# On an element containing links

```svelte
<script>
    import { activeLink } from '@fabianmossberg/active-link';
    import '../app.css';
</script>

<div use:activeLink class="menu">
    <ul>
        <li><a href="/">Home</a>
        <li><a href="/computers">Computers</a>
            <ul>
                <li><a href="/computers/atari">Atari</a></li>
                <li><a href="/computers/macintosh">Macintosh</a></li>
            </ul>
        </li>
    </ul>
</div>
```