## Overview

Radio buttons are normally presented in groups (a collection of radio buttons describing a set of related options), and only one radio button in a group can be selected at the same time. For thease reason, is recomended to use the `ltd-radio-group`component instead `ltd-radio`.

---

## Examples

Simple example.

```js
const options = [
  {
    label: 'Show Active',
    value: 'active'
  },
  {
    label: 'Show Inactive',
    value: 'inactive'
  },
  {
    label: 'Show All',
    value: 'all',
    disabled: true
  }
]
let state = 'inactive'

<ltd-radioGroup
  name="one"
  :options="options"
  :model="state">
</ltd-radioGroup>
```

Vertical example.

```js
const options2 = [
  {
    label: 'Dark theme',
    value: 'dark'
  },
  {
    label: 'Light theme',
    value: 'light'
  }
]
let state2 = 'light'

<ltd-radioGroup
  name="two"
  :options="options2"
  :model="state2"
  :vertical="true">
</ltd-radioGroup>
```

### Custom styles

The font family
```scss
$font-family: var(--font-family, 'Helvetica Nue', helvetica, sans-serif);
```

The radio size
```scss
$radio-size: var(--radio-size, 12px);
```

Font size
```scss
$radio-font-size: var(--radio-font-size, 12px);
```

Background color
```scss
$radio-background-color: var(--radio-background-color, white);
```

Border color
```scss
$radio-border-color: var(--radio-border-color, #888B8D);
```

Border color on hover
```scss
$radio-border-color-hover: var(--radio-border-color-hover, #53565A);
```

Border color checked
```scss
$radio-background-color-checked: var(--radio-background-color-checked, #15b750);
```

Border color checked
```scss
$radio-border-color-checked: var(--radio-border-color-checked, #15b750);
```

Border color checked hover
```scss
$radio-border-color-checked-hover: var(--radio-border-color-checked-hover, #39b185);
```

Icon size
```scss
$radio-icon-size: var(--radio-icon-size, 6px);
```

Icon color
```scss
$radio-icon-color: var(--radio-icon-color, white);
```

Label width
```scss
$radio-label-width: var(--radio-label-width, auto);
```

Horizontal margin between radios
```scss
$horizontal-radio-margin: var(--horizontal-radio-margin, 10px);
```

Vertical margin between radios
```scss
$vertical-radio-margin: var(--vertical-radio-margin, 10px);
```