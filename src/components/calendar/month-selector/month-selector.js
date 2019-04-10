import moment from 'moment'
import Icon from '@/components/icon/index'

/**
 *  MonthSelector script file
 * */
export default {
  name: 'LtdMonthSelector', // web-component: ltd-monthSelector
  mixins: [],
  components: {
    'ltd-icon': Icon
  },
  props: {
    date: {
      type: Object,
      default: undefined,
      required: false
    },
    locale: {
      type: String,
      default: 'en',
      required: false
    },
    buttonText: {
      type: String,
      default: 'Today',
      required: false
    },
    arrowIconSource: {
      type: String,
      required: false
    },
    arrowIconSize: {
      type: String,
      default: '20px',
      required: false
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    getMonth (i) {
      return moment().locale(this.locale).month(i).format('MMM')
    },

    setMonth (i) {
      this.$emit('month', i)
    },

    getYear () {
      return this.date.year()
    },

    previusYear () {
      const year = this.date.year() - 1
      this.$emit('year', year)
    },

    nextYear () {
      const year = this.date.year() + 1
      this.$emit('year', year)
    },

    goToToday () {
      this.$emit('today')
    }
  }
}
