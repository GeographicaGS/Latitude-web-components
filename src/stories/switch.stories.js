/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Switch', module)
  .add('Simple switch', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
      `
      <div>
        <p>Simple switch</p>
        <ltd-switch name="simple" @change="onSwitchChange" label="label"></ltd-switch>
        <br/>
        <p>Switch with text</p>
        <ltd-switch name="text" @change="onSwitchChange">
          <span slot="open">O</span>
          <span slot="close">C</span>
        </ltd-switch>
        <br/>
        <p>Switch with icons</p>
        <ltd-switch name="icons" @change="onSwitchChange">
          <i slot="open">
            <ltd-icon :icon="getSource('icons/country.svg')" size="16px"></ltd-icon>
          </i>
          <i slot="close">
            <ltd-icon :icon="getSource('icons/notification.svg')" size="16px"></ltd-icon>
          </i>
        </ltd-switch>
        <br/>
        <p>Disabled switchs</p>
        <ltd-switch disabled></ltd-switch>
        <ltd-switch state="true" disabled></ltd-switch>
      </div>
    `,
    mounted () {
      const el = document.querySelectorAll('ltd-switch')[0]
      setTimeout(() => { el.state = true }, 2000)
    },
    beforeDestroyed () { },
    methods: {
      onSwitchChange (value) {
        console.log(value.detail[0])
      },

      getSource (data) {
        const context = require.context('@/assets/', true, /.svg/)
        const icon = context(`./${data}`)
        return icon
      }
    }
  }))
