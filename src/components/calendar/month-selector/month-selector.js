import moment from 'moment';

/**
 *  MonthSelector script file
 * */
export default {
  name: 'LtdMonthSelector', // web-component: ltd-monthSelector
  mixins: [],
  components: {},
  props: {
    date: {
      type: Object,
      default: undefined,
      required: false,
    },
    locale: {
      type: String,
      default: 'en',
      required: false,
    },
    buttonText: {
      type: String,
      default: 'Today',
      required: false,
    },
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
    getActiveClass(i) {
      return this.date.locale(this.locale).month() === i && moment().year() === this.getYear();
    },

    getMonth(i) {
      return moment().locale(this.locale).month(i).format('MMM');
    },

    setMonth(i) {
      this.$emit('month', i);
    },

    getYear() {
      return this.date.year();
    },

    previusYear() {
      const year = this.date.year() - 1;
      this.$emit('year', year);
    },

    nextYear() {
      const year = this.date.year() + 1;
      this.$emit('year', year);
    },

    goToToday() {
      this.$emit('today');
    },
  },
};
