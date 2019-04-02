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