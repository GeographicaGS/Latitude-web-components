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
            content here
            <button>b</button>
          </div>
        </ltd-dropdown>
      </div>
    `,
    mounted () {
      this.el = document.getElementsByTagName('ltd-dropdown')[0]
      console.log(this.el)
      this.el.open = false
      setTimeout(() => {
        this.el.open = true
      }, 2000)

      const btn = this.el.querySelector('button')
      console.log(btn)
      btn.addEventListener('click', () => {
        console.log('ñJZFBJS')
      })
    },
    beforeDestroyed () { },
    methods: {
      onChange () {
        console.log('change')
      }
    }
  }))
