/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Radio group', module)
  .add('Simple radio group', () => ({
    data () {
      return {
        els: undefined,
        group: undefined,
        geo: true,
        currentState: 'inactive',
        currentStateG: 'active'
      }
    },
    template: // html
      `
      <div>
        <ltd-radio-group vertical="true" name="ones"></ltd-radio-group>
        <p>Radio button selection: {{ currentState }}</p>
        <ltd-radio-group name="two"></ltd-radio-group>
        <p>Radio button selection: {{ currentStateG }}</p>
      </div>
    `,
    mounted () {
      this.group = document.querySelectorAll('ltd-radio-group')[0]
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
          value: 'all'
        }
      ]

      const g = document.querySelectorAll('ltd-radio-group')[1]
      g.addEventListener('change', this.changeG, false)
      g.model = this.currentStateG
      g.options = [
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
      },

      changeG (event) {
        this.currentStateG = event.detail[0]
      }
    }
  }))
