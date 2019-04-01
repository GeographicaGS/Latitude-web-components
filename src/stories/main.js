import Vue from 'vue'
// eslint-disable-next-line
import wrap from '@vue/web-component-wrapper';

import Icon from '@/components/icon/index'
import Calendar from '@/components/calendar/index'
import Table from '@/components/table/index'
import Dropdown from '@/components/dropdown/index'
import Tooltip from '@/components/tooltip/index'

const WrappedIcon = wrap(Vue, Icon)
const WrappedCalendar = wrap(Vue, Calendar)
const WrappedTable = wrap(Vue, Table)
const WrappedDropdown = wrap(Vue, Dropdown)
const WrappedTooltip = wrap(Vue, Tooltip)

window.customElements.define('ltd-icon', WrappedIcon)
window.customElements.define('ltd-calendar', WrappedCalendar)
window.customElements.define('ltd-table', WrappedTable)
window.customElements.define('ltd-dropdown', WrappedDropdown)
window.customElements.define('ltd-tooltip', WrappedTooltip)
