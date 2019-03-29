/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('radio', module)
  .add('Simple radio', () => ({
    data () {
      return {
        els: undefined,
        group: undefined,
        geo: true,
        currentState: 'inactive'
      }
    },
    template: // html
      `
      <div>
        <ltd-radio-group vertical="true"></ltd-radio-group>
        <p>Radio button selection: {{ currentState }}</p>
      </div>
    `,
    mounted () {
      this.group = document.querySelector('ltd-radio-group')
      this.group.addEventListener('change', this.change, false)
      this.group.model = this.currentState
      this.group.options = [
        {
          label: 'Show Active',
          value: 'active'
        },
        {
          label: 'Show Inactive',
          value: 'inactive'
        },
        {
          label: 'Show All',
          value: 'all',
          disabled: true
        }
      ]
    },
    beforeDestroyed () { },
    methods: {
      changeSimple (event) {
        console.log('sisisi')
        console.log(event)
        this.simple = event.detail[0]
      },

      change (event) {
        this.currentState = event.detail[0]
      }
    }
  }))
