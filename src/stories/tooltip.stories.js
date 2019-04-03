/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Tooltip', module)
  .add('Simple tooltip', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
      `
      <div style="margin-left: 100px; font-family: 'Helvetica Nue', helvetica, sans-serif;">
        <br />
        <br />
        <ltd-tooltip text="Tooltip value agachupagüer gromenagüer">
          <button>Default</button>
        </ltd-tooltip>
        <p><small>Default. With <strong>1s delay</strong> and <strong>top</strong> positioning</small></p>

        <br />
        <ltd-tooltip text="Tooltip value" position="bottom" show-delay="2000">
          <button>Bottom</button>
        </ltd-tooltip>
        <p><small>With <strong>2s show-delay</strong> and <strong>bottom</strong> positioning</small></p>

        <br />
        <ltd-tooltip text="Tooltip value" position="left" hide-delay="2000">
          <button>Left</button>
        </ltd-tooltip>
        <p><small>With <strong>left</strong> positioning</small> with <strong>2s hide-delay</strong></p>

        <br />
        <ltd-tooltip text="Tooltip value" position="right">
          <button>Right</button>
        </ltd-tooltip>
        <p><small>With <strong>right</strong> positioning</small></p>

        <br />
        <ltd-tooltip text="Tooltip value" position="top-left">
          <button>Top - Left</button>
        </ltd-tooltip>
        <p><small>With <strong>top-left</strong> positioning</small></p>

        <br />
        <ltd-tooltip text="Tooltip value" position="top-right">
          <button>Top - right</button>
        </ltd-tooltip>
        <p><small>With <strong>top-right</strong> positioning</small></p>

        <br />
        <ltd-tooltip text="Tooltip value" position="bottom-left">
          <button>Bottom - Left</button>
        </ltd-tooltip>
        <p><small>With <strong>bottom-left</strong> positioning</small></p>

        <br />
        <ltd-tooltip text="Tooltip value" position="bottom-right">
          <button>Bottom - right</button>
        </ltd-tooltip>
        <p><small>With <strong>bottom-right</strong> positioning</small></p>
      </div>
  `,
    mounted () {
      [this.el] = document.getElementsByTagName('ltd-tooltip')
      console.log(this.el)
      const style = {
        'tooltip': {
          'background-color': 'whitesmoke !important',
          'width': '80px !important',
          'border-radius': '13px !important'
        },
        'tooltip:after': {
          'border-color': 'whitesmoke transparent transparent transparent !important'
        },
        'tooltip p': {
          'color': 'green !important'
        }
      }
      this.el.customStyle = style
    },
    beforeDestroyed () { },
    methods: { }
  }))
