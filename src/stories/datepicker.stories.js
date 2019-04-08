/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

/* <ltd-datepicker
  icon-source="https://simpleicons.org/icons/node-dot-js.svg"
  icon-size="20px"
  trigger-arrow-icon-source="https://simpleicons.org/icons/node-dot-js.svg"
  trigger-arrow-icon-size="12px"
  arrow-icon-source="https://simpleicons.org/icons/node-dot-js.svg"
  arrow-icon-size="30px"
  selected-date="2019-04-04"
  date-format="DD MMMM YYYY"
  month-format="MMMM"
  day-format="ddd"
  locale="en"
  range
  future-selection
></ltd-datepicker> */

storiesOf('Datepicker', module)
  .add('Simple datepicker', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
      `
      <div style="width: 260px;">
        <ltd-datepicker
          start-date="2019-04-04"
          end-date="2019-04-05"
          date-format="DD MMMM YYYY"
          month-format="MMMM"
          day-format="ddd"
          locale="en"
          range
          future-selection
        ></ltd-datepicker>
      </div>
    `,
    mounted () {
      [this.el] = document.getElementsByTagName('ltd-datepicker')
      this.el.addEventListener('dateChanged', this.onSetCalendarDate, false)
      // const today = new Date()
      // const to = today.toISOString().slice(0, 10)
      // const from = new Date(today.setDate(today.getDate() - 6)).toISOString().slice(0, 10)
      // this.el.selectableRange = [from, to]

      // setTimeout(() => { this.el.selectedDate = to }, 2000)
    },
    beforeDestroyed () { },
    methods: {
      onSetCalendarDate (event) {
        console.log('The date selected is: ')
        console.log(event.detail[0])
      }
    }
  }))
