import Vue from 'vue'
// eslint-disable-next-line
import wrap from '@vue/web-component-wrapper';

import Icon from '@/components/icon/index'
import Calendar from '@/components/calendar/index'
import Table from '@/components/table/index'

const WrappedIcon = wrap(Vue, Icon)
const WrappedCalendar = wrap(Vue, Calendar)
const WrappedTable = wrap(Vue, Table)

window.customElements.define('ltd-icon', WrappedIcon)
window.customElements.define('ltd-calendar', WrappedCalendar)
window.customElements.define('ltd-table', WrappedTable)
