import moment from 'moment';
import Days from './days/index';

/**
 *  Calendar script file
 *
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
 * */
export default {
  name: 'LtdCalendar', // component: ltd-calendar
  mixins: [],
  components: {
    'ltd-days': Days,
  },
  props: {
    setDate: {
      type: Function,
      default: undefined,
      required: false,
    },
    selectedDate: {
      type: String,
      default: '',
      required: false,
    },
    startDate: {
      type: String,
      default: '',
      required: false,
    },
    endDate: {
      type: String,
      default: '',
      required: false,
    },
    locale: {
      type: String,
      default: 'en',
      required: false,
    },
    dayFormat: {
      type: String,
      default: 'ddd',
      required: false,
    },
    monthFormat: {
      type: String,
      default: 'MMM',
      required: false,
    },
    range: {
      type: Boolean,
      default: false,
      required: false,
    },
    futureSelection: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  data() {
    return {
      current: moment(),
      start: undefined,
      end: undefined,
      isMonthSelectorOpen: false,
    };
  },
  mounted() {
    this.setDateRanges();
  },
  updated() {},
  computed: {},
  methods: {
    setDateRanges() {
      if (this.selectedDate) {
        this.start = moment(this.selectedDate);
        this.end = moment(this.selectedDate);
        return;
      }

      if (this.startDate) {
        this.start = moment(this.startDate);
      }
      if (this.endDate) {
        this.end = moment(this.endDate);
      }
    },

    changeDate(date) {
      if (!this.futureSelection && date.isAfter(moment())) { return; }

      if (
        !this.start || date.isBefore(this.start, 'day')
        || !this.start.isSame(this.end, 'day')
      ) {
        this.start = date;
        this.end = date;
      } else if (date.isSame(this.start, 'day') && date.isSame(this.end, 'day')) {
        this.start = null;
        this.end = null;
      }

      if (!this.range) {
        this.start = date;
        this.end = date;
        this.setDate({ date });
        return;
      }

      if (date.isAfter(this.start, 'day')) {
        this.end = date;
      }

      const { start } = this;
      const { end } = this;
      this.setDate({ start, end });
    },
    changeMonth(month) {
      this.current = this.current.month(month);
    },
    setYear(year) {
      this.current = this.current.year(year);
    },
    setMonth(month) {
      this.current = this.current.month(month);
      this.toggleMonths();
    },
    toggleMonths() {
      this.isMonthSelectorOpen = !this.isMonthSelectorOpen;
    },
    reset() {
      this.isMonthSelectorOpen = false;
      this.current = moment();
      this.setDateRanges();
    },
  },
};
