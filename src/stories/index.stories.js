/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import Icon from '@/components/icon/index';
import Calendar from '@/components/calendar/index';

storiesOf('Icon', module)
  .add('Simple icon', () => ({
    components: {
      'ltd-icon': Icon,
    },
    data() {
      return {
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
    components: {
      'ltd-calendar': Calendar,
    },
    data() {
      return {
      };
    },
    template: // html
    `
      <div>
        <ltd-calendar :set-date="onSetCalendarDate"
          start-date="2019-03-02"
          end-date="2019-03-20"
          month-format="MMMM"
          day-format="ddd"
          locale="en"
          range
          future-selection>
        </ltd-calendar>
      </div>
  `,
    methods: {
      onSetCalendarDate(value) {
        console.log('set date!');
        console.log(value);
      },
    },
  }));
