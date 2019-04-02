/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Dropdown', module)
  .add('Simple dropdown', () => ({
    data () {
      return {
        el: undefined,
        date: 'No date selected'
      }
    },
    directives: { },
    template: // html
      `
      <div>
        <ltd-dropdown>
          <button slot="trigger">dropdown</button>
          <div slot="content">
            <div style="width: 200px; height: auto; border: 1px solid grey; border-radius: 3px; padding: 10px;">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas vitae dolor id sodales. Integer consectetur, magna nec euismod lobortis, mi felis tincidunt dolor, ac congue tellus mi tristique ante. Vestibulum sit amet fermentum dolor, vitae efficitur elit. Fusce vel quam urna. Curabitur accumsan orci ac fermentum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis erat, iaculis vel euismod eget, iaculis sit amet felis. Maecenas suscipit vel nunc sit amet faucibus. Maecenas urna lacus, aliquam nec erat eu, vestibulum viverra sem. Quisque fringilla lorem eu ligula finibus, id cursus diam bibendum.</p>
            </div>
          </div>
        </ltd-dropdown>
        <br />
        <div>Some content here</div>
        <br />
        <ltd-dropdown>
          <div slot="trigger">{{ this.date }}</div>
          <div slot="content" style="width: 300px;">
            <div style="width: 282px; height: auto; box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2); border-radius: 4px;">
              <ltd-calendar
                selected-date="2019-04-02"
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
      [this.el] = document.getElementsByTagName('ltd-dropdown')
      const calendar = document.getElementsByTagName('ltd-calendar')[0]
      calendar.dateChanged = this.onSetCalendarDate
      console.log(calendar)

      // setTimeout(() => {
      //   this.el.open = true
      // }, 2000)
    },
    beforeDestroyed () { },
    methods: {
      onSetCalendarDate (value) {
        console.log('The date selected is: ')
        console.log(value.date)
      }
    }
  }))
