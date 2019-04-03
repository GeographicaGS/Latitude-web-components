/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Dropdown', module)
  .add('Simple dropdown', () => ({
    data () {
      return {
        el: undefined,
        selectedDate: '2019-04-01'
      }
    },
    directives: { },
    template: // html
      `
      <div>
        <ltd-dropdown>
          <button slot="trigger">dropdown</button>
          <div slot="content">
            <ul>
              <li><button>uno</button></li>
              <li>dos</li>
              <li>tres</li>
            </ul>
          </div>
        </ltd-dropdown>
        <br />
        <br />
        <br />
        <ltd-dropdown>
          <div slot="trigger">{{ this.selectedDate || 'Not selected date' }}</div>
          <div slot="content">
            <div style="width: 320px;">
              <ltd-calendar
                :selected-date="selectedDate"
                month-format="MMMM"
                day-format="ddd"
                locale="en"
                future-selection>
              </ltd-calendar>
            </div>
          </div>
        </ltd-dropdown>
      </div>
  `,
    mounted () {
      [this.el] = document.getElementsByTagName('ltd-calendar')
      this.el.dateChanged = this.onSetCalendarDate
    },
    beforeDestroyed () { },
    methods: {
      onSetCalendarDate (value) {
        console.log('The date selected is: ')
        console.log(value.date)
      }
    }
  }))
