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
        <ltd-switch name="simple" @change="onSwitchChange"></ltd-switch>
        <br/>
        <p>Switch with text</p>
        <ltd-switch name="text" @change="onSwitchChange">
          <span slot="open">O</span>
          <span slot="close">O</span>
        </ltd-switch>
        <br/>
        <p>Switch with icons</p>
        <ltd-switch name="icons" @change="onSwitchChange">
          <i slot="open">
            <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" fill="#ff0000" size="14px"></ltd-icon>
          </i>
          <i slot="close">
            <ltd-icon icon="https://simpleicons.org/icons/node-dot-js.svg" fill="#006666" size="14px"></ltd-icon>
          </i>
        </ltd-switch>
        <br/>
        <p>Switch with labels</p>
        <ltd-switch name="simple" @change="onSwitchChange" label="label"></ltd-switch>
        <div style="margin-left: 50px;">
          <ltd-switch name="simple" @change="onSwitchChange" label="label" label-position="left"></ltd-switch>
        </div>
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

      /**
       * @param {*} data
       *
       * @use getSource('icons/country.svg')
       */
      getSource (data) {
        const context = require.context('@/assets/', true, /.svg/)
        const icon = context(`./${data}`)
        return icon
      }
    }
  }))
