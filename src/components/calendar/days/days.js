import moment from 'moment';
import Day from '../day/index';

/**
 *  Days script file
 * */
export default {
  name: 'LtdDays', // component: ltd-days
  mixins: [],
  components: {
    'ltd-day': Day,
  },
  props: {
    date: {
      type: Object,
      default: undefined,
      required: false,
    },
    startDate: {
      type: Object,
      default: '',
      required: false,
    },
    endDate: {
      type: Object,
      default: '',
      required: false,
    },
    dayFormat: {
      type: String,
      default: 'ddd',
      required: false,
    },
    locale: {
      type: String,
      default: 'en',
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
      thisDate: null,
      daysInMonth: null,
      firstDayDate: null,
      previousMonth: null,
      previousMonthDays: null,
      nextMonth: null,
      days: [],
      prevMonthItems: [],
      currMonthItems: [],
      nextMonthItems: [],
    };
  },
  mounted() {
    console.log(this);
    this.days = [];
    this.thisDate = moment(this.date);
    this.daysInMonth = moment(this.date).daysInMonth();
    this.firstDayDate = moment(this.date).startOf('month');
    this.previousMonth = moment(this.date).subtract(1, 'month');
    this.previousMonthDays = this.previousMonth.daysInMonth();
    this.nextMonth = moment(this.date).add(1, 'month');

    try {
      this.prevMonthItems = this.pastMonthRange();
      this.currMonthItems = this.currentMonthRange();
      this.nextMonthItems = this.nextMonthRange();
    } catch (error) {
      // TODO: controlar esto
    }
  },
  computed: {
  },
  methods: {
    /**
     * Get weekdays labels
     */
    getLabel(i) {
      const day = this.locale === 'en' ? i + 1 : i; // NOTE: ugly and inconsistent
      return moment().locale(this.locale).weekday(day).format(this.dayFormat);
    },

    /**
     * Get past month days
     */
    pastMonthRange() {
      const arr = [];
      for (let i = this.firstDayDate.day(); i > 1; i -= 1) {
        this.previousMonth.date(this.previousMonthDays - i + 2);
        const props = {
          currentDate: this.date,
          date: moment(this.previousMonth),
          startDate: this.startDate,
          endDate: this.endDate,
        };
        arr.push(props);
        this.days.push(props);
      }
      return arr;
    },

    /**
     * Get current month days
     */
    currentMonthRange() {
      const arr = [];
      for (let i = 1; i <= this.daysInMonth; i += 1) {
        this.thisDate.date(i);
        const props = {
          currentDate: this.date,
          date: moment(this.thisDate),
          startDate: this.startDate,
          endDate: this.endDate,
        };
        arr.push(props);
        this.days.push(props);
      }
      return arr;
    },

    /**
     * Get next month days
     */
    nextMonthRange() {
      const len = this.prevMonthItems.concat(this.currMonthItems).length;
      const arr = [];
      for (let i = 1; i <= (42 - len); i += 1) {
        this.nextMonth.date(i);
        const props = {
          currentDate: this.date,
          date: moment(this.nextMonth),
          startDate: this.startDate,
          endDate: this.endDate,
        };
        arr.push(props);
        this.days.push(props);
      }
      return arr;
    },
  },
};
