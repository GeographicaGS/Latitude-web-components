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
        <ltd-switch disabled></ltd-switch>
        <br/>
        <ltd-switch state="true" @change="onSwitchChange"></ltd-switch>
        <br/>
        <ltd-switch>
          <span slot="open">O</span>
          <span slot="close">C</span>
        </ltd-switch>
        <br/>
        <ltd-switch>
          <i slot="open">
            <ltd-icon :icon="getSource('icons/country.svg')" size="16px"></ltd-icon>
          </i>
          <i slot="close">
            <ltd-icon :icon="getSource('icons/notification.svg')" size="16px"></ltd-icon>
          </i>
        </ltd-switch>
      </div>
    `,
    mounted () {
      const els = document.querySelectorAll('ltd-switch')
      console.log(els)

      els.forEach(el => {
        console.log(el)
        el.change = this.onSwitchChange
      })
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
