import Strings from '@i18n';

// basic
import BrickButton from './pages/basic/brick-button';
import Button from './pages/basic/button';
import Iconfont from './pages/basic/icon-font';
import Motion from './pages/basic/motion';
import TYText from './pages/basic/tytext';
import UnitText from './pages/basic/unit-text';
// data-entry
import Checkbox from './pages/data-entry/checkbox';
import DatePicker from './pages/data-entry/date-picker';
import PickerView from './pages/data-entry/picker-view';
import Slider from './pages/data-entry/slider';
import Stepper from './pages/data-entry/stepper';
import SwitchButton from './pages/data-entry/switch-button';
import TimerPicker from './pages/data-entry/timer-picker';
// feedback
import Dialog from './pages/feedback/dialog';
import GlobalToast from './pages/feedback/global-toast';
import ToastView from './pages/feedback/toast-view';

export const routes = [
  // basic
  {
    name: Strings.getLang('brick_button'),
    href: '/basic/brick-button',
    component: BrickButton,
  },
  {
    name: Strings.getLang('button'),
    href: '/basic/button',
    component: Button,
  },
  {
    name: Strings.getLang('iconfont'),
    href: '/basic/icon-font',
    component: Iconfont,
  },
  {
    name: Strings.getLang('motion'),
    href: '/basic/motion',
    component: Motion,
  },
  {
    name: Strings.getLang('tytext'),
    href: '/basic/tytext',
    component: TYText,
  },
  {
    name: Strings.getLang('unittext'),
    href: '/basic/unit-text',
    component: UnitText,
  },
  // data-entry
  {
    name: Strings.getLang('checkbox'),
    href: '/data-entry/checkbox',
    component: Checkbox,
  },
  {
    name: Strings.getLang('datepicker'),
    href: '/data-entry/date-picker',
    component: DatePicker,
  },
  {
    name: Strings.getLang('pickerview'),
    href: '/data-entry/picker-view',
    component: PickerView,
  },
  {
    name: Strings.getLang('slider'),
    href: '/data-entry/slider',
    component: Slider,
  },
  {
    name: Strings.getLang('stepper'),
    href: '/data-entry/stepper',
    component: Stepper,
  },
  {
    name: Strings.getLang('switchbutton'),
    href: '/data-entry/switch-button',
    component: SwitchButton,
  },
  {
    name: Strings.getLang('timepicker'),
    href: '/data-entry/timer-picker',
    component: TimerPicker,
  },
  // feedback
  {
    name: Strings.getLang('dialog'),
    href: '/feedback/dialog',
    component: Dialog,
  },
  {
    name: Strings.getLang('globaltoast'),
    href: '/feedback/global-toast',
    component: GlobalToast,
  },
  {
    name: 'ToastView 吐司',
    href: '/feedback/toast-view',
    component: ToastView,
  },
];
