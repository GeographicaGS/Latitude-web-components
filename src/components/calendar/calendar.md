## Overview
Things to know when using **Calendar** component:

- The calendar component is designed to fit the size (width) of your container.
- Its styles can be modified through CSS variables.
- By default, the component allows the selection of a single day.
- The output will be in Date format wrapped into an Object.
- By default, the component shows english language.


## Examples

### Selected date

This example shows a **Calendar** component whith yesterday as a selected date.

The output format will be: 
```json
{ date: 'GMT date' }
```

```js
const today = new Date()
const yesterday = new Date(today.setDate(today.getDate() - 1)).toISOString().slice(0, 10)

<div style="width: 300px;">
  <ltd-calendar
    :selected-date="yesterday">
  </ltd-calendar>
</div>
```

### Selected range

This example shows a **Calendar** component whith a selected range and restricted to not select future dates.

The output will be: 
```json
{ 
  start: 'GMT date', 
  end: 'GMT date' 
}
```

```js
const today = new Date()
const yesterday = new Date(today.setDate(today.getDate() - 1)).toISOString().slice(0, 10)
const someDay = new Date(today.setDate(today.getDate() - 10)).toISOString().slice(0, 10)

<div style="width: 300px;">
  <ltd-calendar
    :start-date="someDay"
    :end-date="yesterday"
    range
    :future-selection="false">
  </ltd-calendar>
</div>
```