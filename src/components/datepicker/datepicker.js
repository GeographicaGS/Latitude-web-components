import moment from 'moment'
import Calendar from '../calendar/index'
import Icon from '../icon/index'
// eslint-disable-next-line
import { ClickOutside } from '../../directives'

/**
 * Datepicker script file
 *
 * @version 1.0.0
 **/

export default {
  name: 'LtdDatepicker', // web-component: ltd-datepicker
  mixins: [],
  components: {
    'ltd-calendar': Calendar,
    'ltd-icon': Icon
  },
  props: {
    /**
    * Sets style
    */
    customStyle: {
      type: Object
    },
    /**
     * Output callback
     * */
    dateChanged: {
      type: Function,
      default: undefined,
      required: false
    },
    /**
     * Sets the selected date (no range type)
     * */
    selectedDate: {
      type: String,
      default: undefined,
      required: false
    },
    /**
     * Sets the start selected date (range type)
     * */
    startDate: {
      type: String,
      default: undefined,
      required: false
    },
    /**
     * Sets the end selected date (range type)
     * */
    endDate: {
      type: String,
      default: undefined,
      required: false
    },
    /**
     * Sets the calendar language
     * */
    locale: {
      type: String,
      default: 'en',
      required: false
    },
    /**
    * Output date format
    * */
    dateFormat: {
      type: String,
      default: 'DD MMMM YYYY',
      required: false
    },
    /**
     * Day string format
     * */
    dayFormat: {
      type: String,
      default: 'ddd',
      required: false
    },
    /**
     * Month string format
     * */
    monthFormat: {
      type: String,
      default: 'MMM',
      required: false
    },
    /**
     * If specified, the calendar selection will be multiple, oherwise it will be simple
     * */
    range: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * If specified, future dates can be selected
     * */
    futureSelection: {
      type: Boolean,
      default: true,
      required: false
    },
    /**
     * Specifies the range of dates over which you can make a selection
     * */
    selectableRange: {
      type: Array,
      default: undefined,
      required: false
    },
    /**
     * Source for a calendar icon
     * */
    iconSource: {
      type: String,
      required: false
    },
    /**
     * Calendar icon size
     * */
    iconSize: {
      type: String,
      default: '20px',
      required: false
    },
    /**
     * Source for an arrow icon
     * */
    triggerArrowIconSource: {
      type: String
    },
    /**
     * Arrow icon size
     * */
    triggerArrowIconSize: {
      type: String,
      default: '12px',
      required: false
    },
    /**
     * Source for an arrow icon (calendar heading)
     * */
    arrowIconSource: {
      type: String
    },
    /**
     * Arrow icon size (calendar heading)
     * */
    arrowIconSize: {
      type: String,
      default: '20px',
      required: false
    },
    /**
     * Trigger placeholder
     * */
    placeholder: {
      type: String,
      default: 'Select a date',
      required: false
    }
  },
  data () {
    return {
      selected: this.checkSelectedDate(),
      expanded: false
    }
  },
  computed: {},
  methods: {
    setSelectedDate (obj) {
      if (this.range) {
        const start = moment(obj.start).locale(this.locale).format(this.dateFormat)
        const end = moment(obj.end).locale(this.locale).format(this.dateFormat)
        this.$nextTick(() => { this.selected = `${start} - ${end}` })
      } else {
        this.$nextTick(() => {
          this.selected = moment(obj.date).locale(this.locale).format(this.dateFormat)
        })
      }
    },

    checkSelectedDate () {
      if (this.range) {
        const start = moment(this.startDate).locale(this.locale).format(this.dateFormat)
        const end = moment(this.endDate).locale(this.locale).format(this.dateFormat)
        return (start && end) ? `${start} - ${end}` : this.placeholder
      } else {
        const obj = { date: this.selectedDate }
        return this.selectedDate ? this.setSelectedDate(obj) : this.placeholder
      }
    },

    close () {
      this.expanded = false
    },

    enter (element) {
      const width = getComputedStyle(element).width
      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'
      const height = getComputedStyle(element).height
      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0
      // eslint-disable-next-line
      window.getComputedStyle(element).height
      setTimeout(() => { element.style.height = height })
    },

    afterEnter (element) {
      element.style.height = 'auto'
    },

    leave (element) {
      const height = getComputedStyle(element).height
      element.style.height = height
      // eslint-disable-next-line
      window.getComputedStyle(element).height
      setTimeout(() => { element.style.height = 0 })
    },

    /**
     * Gets custom styles
     * */
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
     * */
    generateStyle (data) {
      return `${
        Object.entries(data).map(values => {
          const [key, value] = values
          return `${key}: ${value}`
        }).join(';')
      }`
    }
  },
  mounted () {
    this.$refs.calendar.$on('dateChanged', this.setSelectedDate)
  },
  watch: {
    selectedDate (date) {
      this.selectedDate = date
      this.checkSelectedDate()
    },

    startDate (date) {
      this.startDate = date
      this.checkSelectedDate()
    },

    endDate (date) {
      this.endDate = date
      this.checkSelectedDate()
    },

    customStyle () {
      this.getStyle()
    }
  }
}
