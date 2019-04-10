## Overview
The **Datepicker** component is basically a wrapper that extends the functionalities of the calendar component into a dropdown.

Things to know when using **Datepicker** component:

- The component is designed to fit the size (width) of your container.
- Its styles can be modified through CSS variables.
- By default, the component allows the selection of a single day.
- The output will be in `Date` format wrapped into an `Object`.
- By default, the component shows english language.


## Examples

### Selected date

This example shows a simple selection **Datepicker** component whith yesterday as a selected date.

The output format will be: 
```json
{ date: 'GMT date' }
```

```js
const today = new Date()
const yesterday = new Date(today.setDate(today.getDate() - 1)).toISOString().slice(0, 10)

<div style="width: 300px;">
  <ltd-datepicker :selected-date="yesterday" ></ltd-datepicker>
</div>
```

### Selected range

This example shows a **Datepicker** component whith a selected range and restricted to not select future dates.

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
  <ltd-datepicker
    range
    :future-selection="false"
    :start-date="someDay"
    :end-date="yesterday"
  ></ltd-datepicker>
</div>
```