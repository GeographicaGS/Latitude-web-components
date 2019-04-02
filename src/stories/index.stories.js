/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import './main'

storiesOf('Icon', module)
  .add('Simple icon', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
    `
      <div>
        <ltd-icon :icon="getSource('icons/country.svg')" size="120px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="60px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="30px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="20px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="10px">
        </ltd-icon>
      </div>
  `,
    mounted () {},
    beforeDestroyed () {},
    methods: {
      getSource (data) {
        const context = require.context('@/assets/', true, /.svg/)
        const icon = context(`./${data}`)
        return icon
      }
    }
  }))

storiesOf('Calendar', module)
  .add('Simple calendar', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
    `
      <div style="width: 320px;">
        <ltd-calendar
          selected-date="2019-04-02"
          month-format="MMMM"
          day-format="ddd"
          locale="en"
          future-selection>
        </ltd-calendar>
      </div>
  `,
    mounted () {
      [this.el] = document.getElementsByTagName('ltd-calendar')
      this.el.dateChange = this.onSetCalendarDate
      this.el.selectableRange = ['2019-04-01', '2019-04-03']

      setTimeout(() => {
        console.log('cambia!')

        this.el.selectedDate = '2019-04-03'
      }, 2000)
    },
    beforeDestroyed () {},
    methods: {
      onSetCalendarDate (value) {
        // console.log('The date selected is: ')
        // console.log(value)
        // console.log(value.date)
      }
    }
  }))
