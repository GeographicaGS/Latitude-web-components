/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Icon', module)
  .addParameters({
    backgrounds: [{ name: 'light', value: '#eeeeee' }, { name: 'dark', value: '#222222', default: true }]
  })
  .add('Simple icon', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
      `
      <div>
        <ltd-icon :icon="getSource('icons/country.svg')" fill="#e000ff" size="120px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" fill="#00fff0" size="60px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" fill="#5af380" size="30px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" fill="#feff00" size="20px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" fill="#ff0000" size="10px">
        </ltd-icon>
      </div>
  `,
    mounted () {},
    beforeDestroyed () { },
    methods: {
      getSource (data) {
        const context = require.context('@/assets/', true, /.svg/)
        const icon = context(`./${data}`)
        return icon
      }
    }
  }))
