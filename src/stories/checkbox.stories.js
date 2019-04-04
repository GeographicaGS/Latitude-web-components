/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Checkbox', module)
  .add('Simple checkbox', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
      `
      <div>
        <p>Simple checkbox</p>
        <ltd-checkbox @change="onCheckboxChange"></ltd-checkbox>
        <br/>
        <p>Checkbox with label</p>
        <ltd-checkbox label="geo">
          <p>Geographica</p>
        </ltd-checkbox>
        <br/>
        <p>Checkbox with icon</p>
        <ltd-checkbox label="geo" state="true">
          <ltd-icon :icon="getSource('icons/country.svg')" fill="#15b750" size="14px"></ltd-icon>
        </ltd-checkbox>
        <br/>
        <p>Checkbox disabled</p>
        <ltd-checkbox disabled="true">
          <p>disabled</p>
        </ltd-checkbox>
      </div>
    `,
    mounted () { },
    beforeDestroyed () { },
    methods: {
      onCheckboxChange (value) {
        console.log('sisisi')
        console.log(value)
      },

      getSource (data) {
        const context = require.context('@/assets/', true, /.svg/)
        const icon = context(`./${data}`)
        return icon
      }
    }
  }))
