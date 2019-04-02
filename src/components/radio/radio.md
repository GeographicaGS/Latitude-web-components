## Overview

Custom **Radio** component to replace the browser default radio input.


## Examples

Select a single or grouped options.

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
let currentState = 'inactive'
const change = function (event) {
  currentState = event.detail[0]
}
console.log(options)
<div>
<ltd-radio-group name="lol" model="currentState" options="options"></ltd-radio-group>
<p>Radio button selection: {{ currentState }}</p>
</div>
```
