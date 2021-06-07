import Strings from '@i18n';

// basic
import BrickButton from './pages/basic/brick-button';
import Button from './pages/basic/button';
import Iconfont from './pages/basic/icon-font';
import Motion from './pages/basic/motion';
import TYText from './pages/basic/tytext';

// data-entry
import Slider from './pages/data-entry/slider';
import Stepper from './pages/data-entry/stepper';
import SwitchButton from './pages/data-entry/switch-button';

// feedback
import Dialog from './pages/feedback/dialog';
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
  // data-entry
  {
    name: 'SwitchButton 开关',
    href: '/data-entry/switch-button',
    component: SwitchButton,
  },
  {
    name: 'Stepper 步进器',
    href: '/data-entry/stepper',
    component: Stepper,
  },
  {
    name: 'Slider 滑动选择器',
    href: '/data-entry/slider',
    component: Slider,
  },
  {
    name: 'ToastView 吐司',
    href: '/feedback/toast-view',
    component: ToastView,
  },
  {
    name: 'Dialog 对话框',
    href: '/feedback/dialog',
    component: Dialog,
  },
];
