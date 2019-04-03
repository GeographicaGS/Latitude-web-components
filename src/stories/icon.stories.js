/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Icon', module)
  .add('Simple icon', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
      `
      <div>
        <ltd-icon :icon="getSource('icons/country.svg')" size="120px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="60px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="30px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="20px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="10px">
        </ltd-icon>
      </div>
  `,
    mounted () { },
    beforeDestroyed () { },
    methods: {
      getSource (data) {
        const context = require.context('@/assets/', true, /.svg/)
        const icon = context(`./${data}`)
        return icon
      }
    }
  }))
