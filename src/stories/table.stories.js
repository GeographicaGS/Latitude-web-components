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
        ]
      }
    },
    template: // html
      `
      <div>
        <ltd-table 
          placeholder="elements"
          filter
          clickable
          @select="onTableItemClick"
          nodata-message="">
        </ltd-table>
      </div>
  `,
    mounted () {
      [this.el] = document.getElementsByTagName('ltd-table')
      this.el.onTableItemClick = this.onTableItemClick
    },
    beforeDestroyed () { },
    methods: {
      onTableItemClick (item) {
        console.log(item)
      }
    }
  }))
