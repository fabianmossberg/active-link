# Options

You can pass an object with options to the `use:action`.

```svelte
<script>
    import { activeLink } from '@fabianmossberg/active-link';
    import '../app.css';
    const options = { 
        prefix: 'fm', 
        ACTIVE: 'aktiv', 
        CURRENT: '', 
        ANCESTOR: 'above', 
        DESCENDANT: 'below', 
        TOP_LEVEL: 'topo'
    }
</script>

<a href="/" use:activeLink>Home</a>
```

|Option|Default|Description|
|-|-|-|
|`prefix`| `''` | Prefix for the class names. Willl become `${prefix}-${className}` |
|`ACTIVE`| `active` | Class for links that lead to the curret page. |
|`CURRENT`| `current` | Current page, ancsetors to current page or decsendants to current page. |

