## Overview
The **Datepicker** component is basically a wrapper that extends the functionalities of the calendar component in a dropdown.
Please read the calendar component documentation.


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
  <ltd-datepicker
    date-format="DD MMMM YYYY"
    month-format="MMMM"
    day-format="ddd"
    locale="en"
    :selected-date="yesterday"
  ></ltd-datepicker>
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
  <ltd-datepicker
    date-format="DD MMMM YYYY"
    month-format="MMMM"
    day-format="ddd"
    locale="en"
    range
    :future-selection="false"
    :start-date="someDay"
    :end-date="yesterday"
  ></ltd-datepicker>
</div>
```