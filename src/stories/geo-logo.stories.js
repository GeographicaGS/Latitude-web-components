/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('GeoLogo', module)
  .add('Simple logo', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
      `
      <div>
        <div style="position: absolute; bottom: 0; left: 0;">
          <ltd-geo-logo theme="dark" carto="true"></ltd-geo-logo>
        </div>
        
        <div style="position: absolute; bottom: 0; right: 0;">
          <ltd-geo-logo theme="light" carto="true"></ltd-geo-logo>
        </div>
      </div>
  `,
    mounted () { },
    beforeDestroyed () { },
    methods: {
    }
  }))
