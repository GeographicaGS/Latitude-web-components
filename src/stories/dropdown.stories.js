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
        <ltd-dropdown @select="selectItem">
          <div slot="trigger">trigger</div>
          <div slot="content">
            <ul>
              <li><button>uno</button></li>
              <li>dos</li>
              <li>tres</li>
            </ul>
          </div>
        </ltd-dropdown>
      </div>
    `,
    mounted () {
      // this.el = document.querySelector('ltd-dropdown')
      // console.log(this.el);

      // this.el.addEventListener('click', this.selectItem, false)
    },
    beforeDestroyed () { },
    methods: {
      selectItem () {
        console.log('sisisi')
      }
    }
  }))
