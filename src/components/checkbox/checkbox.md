## Overview

Custom **Checkbox** component to replace the browser default checkbox input.


## Examples

### Simple checkbox

Select a single or grouped options.

```js
const onCheckboxChange = function (value) {
  console.log(value)
}

<ltd-checkbox @change="onCheckboxChange"></ltd-checkbox>
<ltd-checkbox disabled></ltd-checkbox>
```

### Labeled checkbox

Checkbox with label

```js
<ltd-checkbox><span>Geographica</span></ltd-checkbox>
<ltd-checkbox><span>Dedalo</span></ltd-checkbox>
```

Checkbox with icon

```js
<ltd-checkbox :state="true">
  <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" size="14px"></ltd-icon>
</ltd-checkbox>
```

### Custom style

The **Calendar** component can be styled by means of CSS variables. The available variables are described below.

The font family
```scss
$font-family: var(--font-family, 'Helvetica Nue', helvetica, sans-serif);
```

Checkbox size
```scss
$checkbox-size: var(--checkbox-size, 12px);
```

Font size (for the label)
```scss
$checkbox-font-size: var(--checkbox-font-size, 11px);
```

Font color (for the label)
```scss
$checkbox-color: var(--checkbox-color, white);
```

Border color
```scss
$checkbox-border-color: var(--checkbox-border-color, #888B8D);
```

Border color hover
```scss
$checkbox-border-color-hover: var(--checkbox-border-color-hover, #53565A);
```

Background color checked
```scss
$checkbox-color-checked: var(--checkbox-color-checked, #15b750);
```

Border color checked
```scss
$checkbox-border-color-checked: var(--checkbox-border-color-checked, #15b750);
```

Background color checked hover
```scss
$checkbox-border-color-checked-hover: var(--checkbox-border-color-checked-hover, #39b185);
```

Tick size
```scss
$checkbox-icon-size: var(--checkbox-icon-size, 6px);
```

Tick color
```scss
$checkbox-icon-color: var(--checkbox-icon-color, white);
```

Label max width
```scss
$checkbox-label-width: var(--checkbox-label-width, auto);
```

Label margin
```scss
$checkbox-label-margin: var(--checkbox-label-margin, 4px);
```