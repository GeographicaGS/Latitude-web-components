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