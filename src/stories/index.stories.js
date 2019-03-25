/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import './main';

storiesOf('Icon', module)
  .add('Simple icon', () => ({
    data() {
      return {
        el: undefined,
      };
    },
    template: // html
    `
      <div>
        <ltd-icon :icon="getSource('icons/country.svg')" size="120px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="60px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="30px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="20px">
        </ltd-icon>
        <ltd-icon :icon="getSource('icons/country.svg')" size="10px">
        </ltd-icon>
      </div>
  `,
    mounted() {},
    beforeDestroyed() {},
    methods: {
      getSource(data) {
        const context = require.context('@/assets/', true, /.svg/);
        const icon = context(`./${data}`);
        return icon;
      },
    },
  }));


storiesOf('Calendar', module)
  .add('Simple calendar', () => ({
    data() {
      return {
        el: undefined,
      };
    },
    template: // html
    `
      <div>
        <ltd-calendar
          selected-date="2019-03-02"
          month-format="MMMM"
          day-format="ddd"
          locale="en"
          future-selection>
        </ltd-calendar>
      </div>
  `,
    mounted() {
      [this.el] = document.getElementsByTagName('ltd-calendar');
      this.el.setDate = this.onSetCalendarDate;
    },
    beforeDestroyed() {},
    methods: {
      onSetCalendarDate(value) {
        console.log('set date!');
        console.log(value);
      },
    },
  }));
