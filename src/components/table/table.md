## Overview
Things to know when using **Table** component:

- The table component is designed to fit the size (width) of your container.
- Its styles can be modified through CSS variables.


## Examples

### Simple table


```js
const tabledata = [
  {
    name: 'Héctor García',
    age: '10',
    company: 'Geographica',
    occupation: 'Co-CEO / Founder'
  },
  {
    name: 'Paula Juliá',
    age: '19',
    company: 'Geographica',
    occupation: 'COO'
  },
  {
    name: 'Alberto Asuero',
    age: '16',
    company: 'Geographica',
    occupation: 'Co-CEO / CTO'
  },
  {
    name: 'Jose Gil',
    age: '18',
    company: 'Geographica',
    occupation: 'Head of Design'
  },
  {
    name: 'Isabel Pozuelo',
    age: '22',
    company: 'Geographica',
    occupation: 'QA'
  },
  {
    name: 'Cayetano Benavent',
    age: '19',
    company: 'Geographica',
    occupation: 'Head of Data'
  },
  {
    name: 'Javier Aragón',
    age: '16',
    company: 'Geographica',
    occupation: 'Lead Engineer'
  },
  {
    name: 'Raúl Yeguas',
    age: '18',
    company: 'Geographica',
    occupation: 'Lead Engineer'
  },
  {
    name: 'Javi Gil',
    age: '18',
    company: 'Geographica',
    occupation: 'Designer'
  },
  {
    name: 'Janto Lima',
    age: '18',
    company: 'Geographica',
    occupation: 'Senior Engineer'
  }
]
const columns = ['name', 'age', 'occupation']

<ltd-table 
  :items="tabledata"
  :visible-columns="columns">
</ltd-table>
```


### Complex table


```js
const tabledata = [
  {
    name: 'Héctor García',
    age: '10',
    company: 'Geographica',
    occupation: 'Co-CEO / Founder'
  },
  {
    name: 'Paula Juliá',
    age: '19',
    company: 'Geographica',
    occupation: 'COO'
  },
  {
    name: 'Alberto Asuero',
    age: '16',
    company: 'Geographica',
    occupation: 'Co-CEO / CTO'
  },
  {
    name: 'Jose Gil',
    age: '18',
    company: 'Geographica',
    occupation: 'Head of Design'
  },
  {
    name: 'Isabel Pozuelo',
    age: '22',
    company: 'Geographica',
    occupation: 'QA'
  },
  {
    name: 'Cayetano Benavent',
    age: '19',
    company: 'Geographica',
    occupation: 'Head of Data'
  },
  {
    name: 'Javier Aragón',
    age: '16',
    company: 'Geographica',
    occupation: 'Lead Engineer'
  },
  {
    name: 'Raúl Yeguas',
    age: '18',
    company: 'Geographica',
    occupation: 'Lead Engineer'
  },
  {
    name: 'Javi Gil',
    age: '18',
    company: 'Geographica',
    occupation: 'Designer'
  },
  {
    name: 'Janto Lima',
    age: '18',
    company: 'Geographica',
    occupation: 'Senior Engineer'
  }
]
const columns = ['name', 'age', 'occupation']

<ltd-table 
  :items="tabledata"
  :visible-columns="columns"
  pagination-placeholder="elements"
  pagination
  :items-per-page="4"
  filter
  clickable
  nodata-message="No hay datos">
</ltd-table>
```

### Custom styles

The font family
```scss
$font-family: var(--font-family, 'Helvetica Nue', helvetica, sans-serif);
```

Background color
```scss
$table-background-color: var(--table-background-color, white);
```

Border size
```scss
$table-border: var(--table-border, 1px);
```

Border color
```scss
$table-border-color: var(--table-border-color, #F1F1F2);
```

Header height
```scss
$table-header-height: var(--table-header-height, 40px);
```

Header padding
```scss
$table-header-padding: var(--table-header-padding, 20px);
```

Header border size
```scss
$table-header-border: var(--table-header-border, 1px);
```

Header border color
```scss
$table-header-border-color: var(--table-header-border-color, #BBBCBC);
```

```scss
$table-header-color: var(--table-header-color, #999999);
```

Header font size
```scss
$table-header-font-size: var(--table-header-font-size, 12px);
```

Header font weight
```scss
$table-header-font-weight: var(--table-header-font-weight, 600);
```

Header text transform
```scss
$table-header-text-transform: var(--table-header-text-transform, capitalize);
```

Header selected item color
```scss
$table-header-selected-color: var(--table-header-selected-color, #333333);
```

Header arrow icon size
```scss
$table-header-arrow-icon-size: var(--table-header-arrow-icon-size, 4px);
```

Header arrow icon color
```scss
$table-header-arrow-icon-color: var(--table-header-arrow-icon-color, #333333);
```

Table body background color
```scss
$table-body-background-color: var(--table-body-background-color, white);
```

Table row height
```scss
$table-body-row-height: var(--table-body-row-height, 60px);
```

Table row background color
```scss
$table-body-row-background-color: var(--table-body-row-background-color, white);
```

Table row background color on hover
```scss
$table-body-row-background-color-hover: var(--table-body-row-background-color-hover, #FAF9F8);
```

Table row border size
```scss
$table-body-row-border: var(--table-body-row-border, 1px);
```

Table row border color
```scss
$table-body-row-border-color: var(--table-body-row-border-color, #EEEEEE);
```

Table cell padding
```scss
$table-body-cell-padding: var(--table-body-cell-padding, 22px 20px);
```

Table cell font size
```scss
$table-body-cell-font-size: var(--table-body-cell-font-size, 14px);
```

Table cell text color
```scss
$table-body-cell-color: var(--table-body-cell-color, #222222);
```

No-data text color
```scss
$table-nodata-color: var(--table-nodata-color, #222222);
```

No-data font size
```scss
$table-nodata-font-size: var(--table-nodata-font-size, 14px);
```

No-data font weight
```scss
$table-nodata-font-weight: var(--table-nodata-font-weight, 600);
```

No-data padding
```scss
$table-nodata-padding: var(--table-nodata-padding, 0 20px);
```

Table filter width
```scss
$table-filter-width: var(--table-filter-width, 100%);
```

Table filter margin
```scss
$table-filter-margin-bottom: var(--table-filter-margin-bottom, 20px);
```

Table filter padding
```scss
$table-filter-padding: var(--table-filter-padding, 0 6px);
```

Table filter input padding
```scss
$table-filter-input-padding: var(--table-filter-input-padding, 2px 6px);
```

Table filter font size
```scss
$table-filter-font-size: var(--table-filter-font-size, 14px);
```

Table filter text color
```scss
$table-filter-color: var(--table-filter-color, #888B8D);
```

Table filter border
```scss
$table-filter-border: var(--table-filter-border, 1px solid #EEEEEE);
```