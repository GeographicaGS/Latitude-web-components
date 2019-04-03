/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import TooltipDirective from '../directives/tooltip/tooltip'
import '../styles/main.scss'

storiesOf('Tooltip', module)
  .add('Simple tooltip', () => ({
    data () {
      return {
        el: undefined
      }
    },
    directives: {
      TooltipDirective
    },
    template: // html
      `
      <div>
        <span v-tooltip>I have a tooltip</span>
      </div>
  `,
    mounted () { },
    beforeDestroyed () { },
    methods: { }
  }))
