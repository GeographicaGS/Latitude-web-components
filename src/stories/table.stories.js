/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Table', module)
  .add('Simple table', () => ({
    data () {
      return {
        el: undefined,
        tabledata: [
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
        ],
        columns: ['name', 'age', 'occupation']
      }
    },
    template: // html
      `
      <div>
        <ltd-table 
          pagination-placeholder="elements"
          pagination-input-placeholder="go to element..."
          pagination
          items-per-page="4"
          filter
          clickable
          nodata-message="There is no data for that search..">
        </ltd-table>
      </div>
    `,
    mounted () {
      [this.el] = document.getElementsByTagName('ltd-table')
      this.el.items = this.tabledata
      this.el.addEventListener('select', this.onTableItemClick, false)

      setTimeout(() => {
        const tabledata2 = [
          {
            name: 'Edgar Bermejo 1',
            age: '10',
            company: 'Geographica aplicada',
            occupation: 'Front-end QA'
          },
          {
            name: 'Héctor García 1',
            age: '10',
            company: 'Geographica aplicada',
            occupation: 'Co-CEO / Founder'
          },
          {
            name: 'Paula Juliá 1',
            age: '19',
            company: 'Geographica aplicada',
            occupation: 'COO'
          },
          {
            name: 'Alberto Asuero 1',
            age: '16',
            company: 'Geographica aplicada',
            occupation: 'Co-CEO / CTO'
          },
          {
            name: 'Jose Gil 1',
            age: '18',
            company: 'Geographica aplicada',
            occupation: 'Head of Design'
          },
          {
            name: 'Isabel Pozuelo 1',
            age: '22',
            company: 'Geographica aplicada',
            occupation: 'QA'
          },
          {
            name: 'Cayetano Benavent 1',
            age: '19',
            company: 'Geographica aplicada',
            occupation: 'Head of Data'
          },
          {
            name: 'Javier Aragón 1',
            age: '16',
            company: 'Geographica aplicada',
            occupation: 'Lead Engineer'
          },
          {
            name: 'Raúl Yeguas 1',
            age: '18',
            company: 'Geographica aplicada',
            occupation: 'Lead Engineer'
          },
          {
            name: 'Javi Gil 1',
            age: '18',
            company: 'Geographica aplicada',
            occupation: 'Designer'
          },
          {
            name: 'Janto Lima 1',
            age: '18',
            company: 'Geographica aplicada',
            occupation: 'Senior Engineer'
          }
        ]
        this.el.visibleColumns = this.columns
        this.el.items = tabledata2
      }, 2000)
    },
    beforeDestroyed () { },
    methods: {
      onTableItemClick (event) {
        console.log('Click en el item:')
        console.log(event.detail[0])
      }
    }
  }))
