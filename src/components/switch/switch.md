## Overview

Switch between two opposing states.


## Examples

Simple switch

```js
<ltd-switch state></ltd-switch>
<br />
<ltd-switch disabled></ltd-switch>
```

Switch with text

```js
<ltd-switch label="open/close">
  <span slot="open">O</span>
  <span slot="close">C</span>
</ltd-switch>
<br />
<ltd-switch state>
  <span slot="open">O</span>
  <span slot="close">C</span>
</ltd-switch>
```

Switch with icons

```js
<ltd-switch>
  <i slot="open">
    <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" size="12px" fill="red"></ltd-icon>
  </i>
  <i slot="close">
    <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" size="12px" fill="blue"></ltd-icon>
  </i>
</ltd-switch>
<br />
<ltd-switch state>
  <i slot="open">
    <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" size="12px"></ltd-icon>
  </i>
  <i slot="close">
    <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" size="12px"></ltd-icon>
  </i>
</ltd-switch>
```

### Custom styles

The font family
```scss
$font-family: var(--font-family, 'Helvetica Nue', helvetica, sans-serif);
```

The switch width
```scss
$switch-width: var(--switch-width, 40px);
```

Border
```scss
$switch-border: var(--switch-border, none);
```

Dragger size
```scss
$switch-dragger-size: calc((#{ $switch-width } / 2) - 4px);
```

Dragger color
```scss
$switch-dragger-color: var(--switch-dragger-color, white);
```

Content text color (if content only)
```scss
$switch-content-color: var(--switch-content-color, white);
```

Content font size (if content only)
```scss
$switch-content-font-size: var(--switch-content-font-size, 12px);
```

Background color
```scss
$switch-background-color: var(--switch-background-color, #BBBCBC);
```

Background color checked
```scss
$switch-background-color-checked: var(--switch-background-color-checked, #15b750);
```

Label font size
```scss
$switch-label-font-size: var(--switch-label-font-size, 12px);
```

Label font weight
```scss
$switch-label-font-weight: var(--switch-label-font-weight, 400);
```

Label text color
```scss
$switch-label-color: var(--switch-label-color, #222222);
```

Label text margin
```scss
$switch-label-margin: var(--switch-label-margin, 6px);
```
