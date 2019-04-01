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
      </div>
  `,
    mounted () { },
    beforeDestroyed () { },
    methods: { }
  }))
