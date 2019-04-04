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
          month-format="MMMM"
          day-format="ddd"
          locale="en"
          range
          future-selection>
        </ltd-calendar>
      </div>
  `,
    mounted () {
      [this.el] = document.getElementsByTagName('ltd-calendar')
      this.el.addEventListener('dateChanged', this.onSetCalendarDate, false)
      // const today = new Date()
      // const to = today.toISOString().slice(0, 10)
      // const from = new Date(today.setDate(today.getDate() - 6)).toISOString().slice(0, 10)
      // this.el.selectableRange = [from, to]

      // setTimeout(() => { this.el.selectedDate = to }, 5000)
    },
    beforeDestroyed () { },
    methods: {
      onSetCalendarDate (event) {
        console.log('The date selected is: ')
        console.log(event.detail[0])
      }
    }
  }))
