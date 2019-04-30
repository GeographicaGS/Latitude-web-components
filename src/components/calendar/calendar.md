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

### Custom style

The **Calendar** component can be styled by means of CSS variables. The available variables are described below.

The font family
```scss
$font-family: var(--font-family, 'Helvetica Nue', helvetica, sans-serif);
```

Text color
```scss
$calendar-color: var(--calendar-color, #53565A);
```

Background color
```scss
$calendar-background-color: var(--calendar-background-color, white);
```

Padding
```scss
$calendar-padding: var(--calendar-padding, 10px);
```

The heading height
```scss
$calendar-heading-height: var(--calendar-heading-height, 40px);
```

The heading font size
```scss
$calendar-heading-font-size: var(--calendar-heading-font-size, 16px);
```

The heading font weight
```scss
$calendar-heading-font-weight: var(--calendar-heading-font-weight, 400);
```

The heading font color
```scss
$calendar-heading-color: var(--calendar-heading-color, #53565A);
```

Calendar border
```scss
$calendar-border: var(--calendar-border, 1px solid #FAF9F8);
```

Calendar border radius
```scss
$calendar-border-radius: var(--calendar-border-radius, 4px);
```

Height of the container for the days of the week
```scss
$calendar-header-height: var(--calendar-header-height, 20px);
```

Font size for the container for the days of the week
```scss
$calendar-header-font-size: var(--calendar-header-font-size, 12px);
```

Font weight for the container for the days of the week
```scss
$calendar-header-font-weight: var(--calendar-header-font-weight, 400);
```

Arrow icon source
```scss
$calendar-arrow-icon: var(--calendar-arrow-icon, 'icon-arrow');
```

Arrow icon fill
```scss
$calendar-arrow-icon-fill: var(--calendar-arrow-icon-fill, #53565A);
```

Arrow icon fill on hover
```scss
$calendar-arrow-icon-fill-hover: var(--calendar-arrow-icon-fill-hover, #696969);
```

Arrow icon fill on hover
```scss
$calendar-days-header-color: var(--calendar-days-header-color, #53565A);
```

The background color for the container for the days of the week
```scss
$calendar-days-header-background-color: var(--calendar-days-header-background-color, transparent);
```

The text color for the **default** calendar days text
```scss
$calendar-day-color: var(--calendar-day-color, #999999);
```

The font size for the **default** calendar days
```scss
$calendar-day-font-size: var(--calendar-day-font-size, 14px);
```

The background color for the **default** calendar days text
```scss
$calendar-day-background-color: var(--calendar-day-background-color, #FAF9F8);
```

The background color for the **muted** calendar days
```scss
$calendar-day-muted-background-color: var(--calendar-day-muted-background-color, #BBBCBC);
```

The background color for the **active** calendar days
```scss
$calendar-day-active-background-color: var(--calendar-day-active-background-color, #FAF9F8);
```

The border color for the **muted** calendar days
```scss
$calendar-day-active-border-color: var(--calendar-day-active-border-color, #00c6d7);
```

The background color for the **selected** calendar days
```scss
$calendar-day-selected-background-color: var(--calendar-day-selected-background-color, #00ff99);
```

The background color for the **selected** calendar days **starts** and **ends**
```scss
$calendar-day-selected-ends-background-color: var(--calendar-day-selected-ends-background-color, darken(#00ff99, 5%));
```

The background color for the months and years buttons
```scss
$calendar-month-selector-button-background: var(--calendar-month-selector-button-background, #FAF9F8);
```

The text color for the months and years buttons
```scss
$calendar-month-selector-button-color: var(--calendar-month-selector-button-color, #53565A);
```

The text color for the months and years buttons
```scss
$calendar-month-selector-button-font-size: var(--calendar-month-selector-button-font-size, 14px);
```

The font weight for the months and years buttons
```scss
$calendar-month-selector-button-font-weight: var(--calendar-month-selector-button-font-weight, 400);
```