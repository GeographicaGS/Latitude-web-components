## Overview
Things to know when using **Tooltip** component:

- The ccomponent wrapps the inner elements into a `<div>` with a `relative` position and `inline-flex` display.


## Examples

Default. With `0.3s delay` and `top` positioning.

```js
<ltd-tooltip text="Tooltip text agachupagüer gromenagüer">
  <button>Tooltip button</button>
</ltd-tooltip>
```

With `2s delay` and `bottom` positioning.

```js
<ltd-tooltip text="Tooltip text" position="bottom" :show-delay="2000">
  <button>Tooltip button</button>
</ltd-tooltip>
```

With `2s delay` for hide and `left` positioning.

```js
<ltd-tooltip text="Tooltip text" position="left" :hide-delay="2000">
  <button>Tooltip button</button>
</ltd-tooltip>
```

With `right` positioning.

```js
<ltd-tooltip text="Tooltip text" position="right">
  <button>Tooltip button</button>
</ltd-tooltip>
```


With `top-left` positioning.

```js
<ltd-tooltip text="Tooltip text" position="top-left">
  <button>Tooltip button</button>
</ltd-tooltip>
```

With `top-right` positioning.

```js
<ltd-tooltip text="Tooltip text" position="top-right">
  <button>Tooltip button</button>
</ltd-tooltip>
```

With `bottom-left` positioning.

```js
<ltd-tooltip text="Tooltip text" position="bottom-left">
  <button>Tooltip button</button>
</ltd-tooltip>
```

With `bottom-right` positioning.

```js
<ltd-tooltip text="Tooltip text" position="bottom-right">
  <button>Tooltip button</button>
</ltd-tooltip>
<ltd-tooltip text="Supermegahyperextra large tooltip text" position="bottom-right">
  <button>Tooltip button</button>
</ltd-tooltip>
```