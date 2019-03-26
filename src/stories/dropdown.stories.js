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
        <ltd-dropdown>
          <div slot="trigger">trigger</div>
          <div slot="content">
            <ul>
              <li><button @click="select">uno</button></li>
              <li>dos</li>
              <li>tres</li>
            </ul>
          </div>
        </ltd-dropdown>
      </div>
  `,
    mounted () { },
    beforeDestroyed () { },
    methods: { }
  }))
