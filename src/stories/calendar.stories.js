/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

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
      this.el.setDate = this.onSetCalendarDate
      this.el.selectableRange = ['2019-04-01', '2019-04-03']

      setTimeout(() => {
        this.el.selectedDate = '2019-04-03'
      }, 2000)
    },
    beforeDestroyed () { },
    methods: {
      onSetCalendarDate (value) {
        console.log('The date selected is: ')
        console.log(value.date)
      }
    }
  }))
