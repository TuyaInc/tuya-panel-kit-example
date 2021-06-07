import Button from './pages/basic/button';
import SwitchButton from './pages/data-entry/switch-button';
import Stepper from './pages/data-entry/stepper';
import Slider from './pages/data-entry/slider';
import ToastView from './pages/feedback/toast-view';
import Dialog from './pages/feedback/dialog';

export const routes = [
  {
    name: 'Button 按钮',
    href: '/basic/button',
    component: Button,
  },
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
