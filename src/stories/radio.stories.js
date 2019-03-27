/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('radio', module)
  .add('Simple radio', () => ({
    data () {
      return {
        els: undefined,
        group: undefined,
        simple: true,
        currentState: 'Show Active'
      }
    },
    template: // html
      `
      <div>
        <p>Simple radio with label</p>
        <ltd-radio v-model="simple">
          <span>Geographica</span>
        </ltd-radio>
        <p>{{ simple }}</p>
        <br/>
        <p>Radio disabled</p>
        <ltd-radio @change="change" disabled>
          <span>Geographica</span>
        </ltd-radio>
        <br/>
        <br/>
        <ltd-radio-group v-model="currentState"></ltd-radio-group>
      </div>
    `,
    mounted () {
      this.els = document.querySelectorAll('ltd-radio')
      this.els.forEach(el => {
        el.change = this.changes
      })
      this.group = document.querySelector('ltd-radio-group')
      console.log(this.group)

      this.group.change = this.change
      this.group.options = {
        active: 'Show Active',
        inactive: 'Show Inactive',
        all: 'Show All'
      }
    },
    beforeDestroyed () { },
    methods: {
      change (value) {
        console.log('sisisi')
        console.log(value)
      }
    }
  }))
