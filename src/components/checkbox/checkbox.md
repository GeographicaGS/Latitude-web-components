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