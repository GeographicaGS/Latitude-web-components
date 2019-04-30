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
<ltd-tooltip text="Tooltip too lon multiline text here agachupagüer" position="bottom" :show-delay="2000" multiline>
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

### Custom styles

The font family
```scss
$font-family: var(--font-family, 'Helvetica Nue', helvetica, sans-serif);
```

Font size
```scss
$tooltip-font-size: var(--tooltip-font-size, 12px);
```

Font weight
```scss
$tooltip-font-weight: var(--tooltip-font-weight, 500);
```

Text color
```scss
$tooltip-color: var(--tooltip-color, white);
```

Background color
```scss
$tooltip-background-color: var(--tooltip-background-color, #222222);
```

Border radius
```scss
$tooltip-border-radius: var(--tooltip-border-radius, 3px);
```

Arrow icon size
```scss
$tooltip-arrow-icon-size: var(--tooltip-arrow-icon-size, 8px);
```

Margin
```scss
$tooltip-marging: var(--tooltip-marging, 10px);
```

Padding
```scss
$tooltip-padding: var(--tooltip-padding, 6px 10px);
```

Max width text (if multiline)
```scss
$tooltip-multiline-width: var(--tooltip-multiline-width, 100px);
```

Text align (if multiline)
```scss
$tooltip-multiline-text-align: var(--tooltip-multiline-text-align, center);
```

Line height (if multiline)
```scss
$tooltip-multiline-line-height: var(--tooltip-multiline-line-height, 1.5);
```

#### NOTE:

In adition you can set your `custom-style` as property as in the example below.

```js
const style = {
  'tooltip': {
    'background-color': 'whitesmoke !important',
    'width': '80px !important',
    'border-radius': '13px !important'
  },
  'tooltip:after': {
    'border-color': 'whitesmoke transparent transparent transparent !important'
  },
  'tooltip p': {
    'color': 'green !important'
  }
}

<ltd-tooltip text="Tooltip here" :custom-style="style">
  <button>Tooltip button</button>
</ltd-tooltip>
```