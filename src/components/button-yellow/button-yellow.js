/**
 *  ButtonYellow script file
* */

import Button from '@/components/button';

export default {
  name: 'LtdButtonYellow', // web-component: ltd-buttonYellow
  mixins: [],
  components: {
    /**
     * Dependecy with Button component
     */
    'ltd-button': Button,
  },
  props: {},
  data() {
    return {

    };
  },
  computed: {
  },
  methods: {
    /**
     * Triggered when button is clicked
     *
     * @type {Event}
     * @event click
     */
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
