/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import Icon from '@/components/icon/index';

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
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="120px">
        </ltd-icon>
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="60px">
        </ltd-icon>
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="30px">
        </ltd-icon>
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="20px">
        </ltd-icon>
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="10px">
        </ltd-icon>
      </div>
  `,
    methods: {
    },
  }));
