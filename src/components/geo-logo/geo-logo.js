import Icon from '../icon/index'

/**
 * @version 1.0.0
 **/
export default {
  name: 'LtdGeoLogo', // web-component: ltd-geo-logo
  mixins: [],
  components: {
    'ltd-icon': Icon
  },
  props: {
    /**
     * Component theme
     */
    theme: {
      type: String,
      default: 'light'
    },
    /**
     * If true, the carto logo will be displayed
     */
    carto: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    getClasses () {
      return {
        'ltd-geo-logo-container': true,
        'light': this.theme === 'light',
        'dark': this.theme === 'dark'
      }
    },

    cartoLogo () {
      return {
        '@/logos/CARTO-logo.svg': this.theme === 'light',
        '@/logos/CARTO-logo-negative.svg': this.theme === 'dark'
      }
    }
  },
  methods: {
  }
}
