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
      <div style="margin-left: 100px;">
        <br />
        <br />
        <ltd-tooltip text="Tooltip value agachupagüer gromenagüer">
          <button>Default</button>
        </ltd-tooltip>
        <p><small>Default. With <strong>0.3s delay</strong> and <strong>top</strong> positioning</small></p>

        <br />
        <ltd-tooltip text="Tooltip value" position="bottom" show-delay="2000">
          <button>Bottom</button>
        </ltd-tooltip>
        <p><small>With <strong>2s delay</strong> and <strong>bottom</strong> positioning</small></p>

        <br />
        <ltd-tooltip text="Tooltip value" position="left">
          <button>Left</button>
        </ltd-tooltip>
        <p><small>With <strong>left</strong> positioning</small></p>

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
    mounted () { },
    beforeDestroyed () { },
    methods: { }
  }))
