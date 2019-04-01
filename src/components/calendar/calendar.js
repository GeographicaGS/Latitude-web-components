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
     * Output callback
     * */
    setDate: {
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
     * If specified, the calendar selection will be multiple, oherwise it will be simple.
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
    }
  },
  data () {
    return {
      current: moment(),
      start: undefined,
      end: undefined,
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
      console.log(this.futureSelection)
      if (!this.futureSelection && date.isAfter(moment())) {
        console.log('sisisi')

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
        this.setDate && this.setDate(obj)
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
      this.setDate && this.setDate(obj)
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
    }
  }
}
