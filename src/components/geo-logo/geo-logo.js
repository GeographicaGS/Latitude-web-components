
/**
 *  GeoLogo script file
 *
 * @version 1.0.0
 **/
export default {
  name: 'LtdGeoLogo', // web-component: ltd-geo-logo
  mixins: [],
  components: {},
  props: {
    /**
     * Sets style
     */
    customStyle: {
      type: Object
    },
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
    /**
     * Gets custom styles
     */
    getStyle () {
      const style = `${
        Object.entries(this.customStyle).map(values => {
          const [key, value] = values
          return `.${key} {${this.generateStyle(value)}}`
        }).join('\n')
      }`
      const el = document.createElement('style')
      el.innerHTML = style
      this.$el.parentNode.insertBefore(el, null)
    },

    /**
     * Generate style by object
     *
     * @property {Object}
     * @type {String}
     */
    generateStyle (data) {
      return `${
        Object.entries(data).map(values => {
          const [key, value] = values
          return `${key}: ${value}`
        }).join(';')
      }`
    }
  }
}
