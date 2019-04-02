/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Dropdown', module)
  .add('Simple dropdown', () => ({
    data () {
      return {
        el: undefined
      }
    },
    directives: { },
    template: // html
      `
      <div>
        <ltd-dropdown @select="onSelect">
          <button slot="trigger">dropdown</button>
          <div slot="content">
            <div style="width: 200px; height: auto; border: 1px solid grey; border-radius: 3px; padding: 10px;">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas vitae dolor id sodales. Integer consectetur, magna nec euismod lobortis, mi felis tincidunt dolor, ac congue tellus mi tristique ante. Vestibulum sit amet fermentum dolor, vitae efficitur elit. Fusce vel quam urna. Curabitur accumsan orci ac fermentum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis erat, iaculis vel euismod eget, iaculis sit amet felis. Maecenas suscipit vel nunc sit amet faucibus. Maecenas urna lacus, aliquam nec erat eu, vestibulum viverra sem. Quisque fringilla lorem eu ligula finibus, id cursus diam bibendum.</p>
              <button @click="onSelect">b</button>
            </div>
          </div>
        </ltd-dropdown>
        <br />
        <div>Some content here</div>
        <br />
        <ltd-dropdown>
          <div slot="trigger">dropdown</div>
          <div slot="content">
            <div style="width: 200px; height: auto; border: 1px solid grey; border-radius: 3px; padding: 10px;">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas vitae dolor id sodales. Integer consectetur, magna nec euismod lobortis, mi felis tincidunt dolor, ac congue tellus mi tristique ante. Vestibulum sit amet fermentum dolor, vitae efficitur elit. Fusce vel quam urna. Curabitur accumsan orci ac fermentum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis erat, iaculis vel euismod eget, iaculis sit amet felis. Maecenas suscipit vel nunc sit amet faucibus. Maecenas urna lacus, aliquam nec erat eu, vestibulum viverra sem. Quisque fringilla lorem eu ligula finibus, id cursus diam bibendum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas vitae dolor id sodales. Integer consectetur, magna nec euismod lobortis, mi felis tincidunt dolor, ac congue tellus mi tristique ante. Vestibulum sit amet fermentum dolor, vitae efficitur elit. Fusce vel quam urna. Curabitur accumsan orci ac fermentum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis erat, iaculis vel euismod eget, iaculis sit amet felis. Maecenas suscipit vel nunc sit amet faucibus.</p>
            </div>
          </div>
        </ltd-dropdown>
      </div>
    `,
    mounted () {
      this.el = document.getElementsByTagName('ltd-dropdown')[0]
      // console.log(this.el)
      this.el.open = false
      this.el.select = this.onSelect
      // setTimeout(() => {
      //   this.el.open = true
      // }, 2000)
    },
    beforeDestroyed () { },
    methods: {
      onSelect () {
        console.log('change')
      }
    }
  }))
