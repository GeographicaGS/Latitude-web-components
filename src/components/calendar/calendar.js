import moment from 'moment'
import Days from './days/index'
import Heading from './heading/index'
import MonthSelector from './month-selector/index'

/**
 *  Calendar script file
 *
 * @version 1.0.0
 *
 * <ltd-calendar
 *  selected-date="2019-03-02"
 *  start-date="2019-03-02"
 *  end-date="2019-03-20"
 *  month-format="MMMM"
 *  day-format="ddd"
 *  locale="en"
 *  range
 *  future-selection>
 * </ltd-calendar>
 *
 * */
export default {
  name: 'LtdCalendar', // component: ltd-calendar
  mixins: [],
  components: {
    'ltd-heading': Heading,
    'ltd-days': Days,
    'ltd-monthSelector': MonthSelector
  },
  props: {
    /**
    * Sets style
    * */
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
      default: '',
      required: false
    },
    /**
     * Sets the start selected date (range type)
     * */
    startDate: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Sets the end selected date (range type)
     * */
    endDate: {
      type: String,
      default: '',
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
    }
  },
  data () {
    return {
      current: moment(),
      start: undefined,
      end: undefined,
      minSelectableDate: this.selectableRange ? moment(this.selectableRange[0]) : undefined,
      maxSelectableDate: this.selectableRange ? moment(this.selectableRange[1]) : undefined,
      isMonthSelectorOpen: false
    }
  },
  mounted () {
    this.setDateRanges()
  },
  updated () {},
  computed: {},
  methods: {
    setDateRanges () {
      if (this.selectedDate) {
        this.start = moment(this.selectedDate)
        this.end = moment(this.selectedDate)
        return
      }

      if (this.startDate) {
        this.start = moment(this.startDate)
      }
      if (this.endDate) {
        this.end = moment(this.endDate)
      }
    },

    changeDate (date) {
      if (this.futureSelection === false && date.isAfter(moment())) {
        console.warn(`[ltd-calendar] Warning: The chosen date can't be selected`)
        return
      }

      if (
        (this.minSelectableDate && date.isBefore(moment(this.minSelectableDate, 'day'))) ||
        (this.maxSelectableDate && date.isAfter(moment(this.maxSelectableDate, 'day').add(1, 'days')))
      ) {
        console.warn(`[ltd-calendar] Warning: The chosen date can't be selected`)
        return
      }

      if (
        !this.start || date.isBefore(this.start, 'day') ||
        !this.start.isSame(this.end, 'day')
      ) {
        this.start = date
        this.end = date
      } else if (date.isSame(this.start, 'day') && date.isSame(this.end, 'day')) {
        this.start = null
        this.end = null
      }

      if (!this.range) {
        this.start = date
        this.end = date
        const obj = { date: date.toDate() }
        this.dateChanged && this.dateChanged(obj)
        return
      }

      if (date.isAfter(this.start, 'day')) {
        this.end = date
      }

      const { start } = this
      const { end } = this
      const obj = {
        start: start.toDate(),
        end: end.toDate()
      }
      this.dateChanged && this.dateChanged(obj)
    },

    changeMonth (month) {
      this.current = moment(this.current).month(month)
    },

    setYear (year) {
      this.current = moment(this.current).year(year)
    },

    setMonth (month) {
      this.current = moment(this.current).month(month)
      this.toggleMonths()
    },

    toggleMonths () {
      this.isMonthSelectorOpen = !this.isMonthSelectorOpen
    },

    reset () {
      this.isMonthSelectorOpen = false
      this.current = moment()
      this.setDateRanges()
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
  watch: {
    selectedDate (date) {
      this.selectedDate = date
      this.setDateRanges()
    },

    startDate (date) {
      this.startDate = date
      this.setDateRanges()
    },

    endDate (date) {
      this.endDate = date
      this.setDateRanges()
    },

    selectableRange (dates) {
      this.selectableRange = dates
      this.minSelectableDate = moment(this.selectableRange[0])
      this.maxSelectableDate = moment(this.selectableRange[1])
    }
  }
}
