import moment from 'moment';
import Icon from '@/components/icon/index';

/**
 *  Heading script file
 *
 *  @version 1.0.0
 * */
export default {
  name: 'LtdHeading', // web-component: ltd-heading
  mixins: [],
  components: {
    'ltd-icon': Icon,
  },
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
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
    getYear() {
      return this.date.year();
    },

    getMonth() {
      return moment(this.date).locale(this.locale).format('MMMM');
    },

    previusMonth() {
      const month = this.date.month() - 1;
      this.$emit('changeMonth', month);
    },

    nextMonth() {
      const month = this.date.month() + 1;
      this.$emit('changeMonth', month);
    },

    openMonths() {
      this.$emit('toggleMonths');
    },
  },
};
