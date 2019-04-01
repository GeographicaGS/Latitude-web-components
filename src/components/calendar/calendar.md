## Overview
Things to know when using **Calendar** component:

- The calendar component is designed to fit the size (width) of your container.
- Its styles can be modified through CSS variables.
- By default, the component allows the selection of a single day.
- The output will be in Date format wrapped into an Object.
- By default, the component shows english language.


## Examples

### Selected date

This example shows a **Calendar** component whith a selected date.
This example shows a **Calendar** component wrapped into a **300px** wide `div`.

The output will be: 
```json
{ date: 'Sat Apr 27 2019 14:38:25 GMT+0200' }
```

```js
var today = new Date().toISOString().slice(0,10)
console.log(today)

<div style="width: 300px;">
  <ltd-calendar
    selected-date="2019-03-06">
  </ltd-calendar>
</div>
```

### Selected range

This example shows a **Calendar** component whith a selected range and restricted to not select future dates.

The output will be: 
```json
{ 
  start: 'Sat Apr 06 2019 00:00:00 GMT+0200', 
  end: 'Sat Apr 16 2019 00:00:00 GMT+0200' 
}
```

```js
<div style="width: 300px;">
  <ltd-calendar
    start-date="2019-03-06"
    end-date="2019-03-16"
    range>
  </ltd-calendar>
</div>
```