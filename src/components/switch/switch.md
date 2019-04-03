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
    <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" size="16px"></ltd-icon>
  </i>
  <i slot="close">
    <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" size="16px"></ltd-icon>
  </i>
</ltd-switch>
<br />
<ltd-switch state>
  <i slot="open">
    <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" size="16px"></ltd-icon>
  </i>
  <i slot="close">
    <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" size="16px"></ltd-icon>
  </i>
</ltd-switch>
```



