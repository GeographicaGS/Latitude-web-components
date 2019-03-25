import moment from 'moment';
import Days from './days/index';

/**
 *  Calendar script file
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
    };
  },
  mounted() {
    console.log(this);
    this.setDate('hi bro!');
  },
  computed: {
    current() {
      return moment();
    },
    start() {
      return moment(this.startDate);
    },
    end() {
      return moment(this.endDate);
    },
  },
  methods: {
    changeDate(date) {
      console.log(date);
    },
    changeMonth(month) {
      console.log(month);
    },
    setYear(year) {
      console.log(year);
    },
    setMonth(month) {
      console.log(month);
    },
    toggleMonths() {

    },
    reset() {

    },
  },
};
