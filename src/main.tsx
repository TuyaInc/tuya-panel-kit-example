import React from 'react';
import { createNavigator, GlobalTheme, NavigationRoute } from 'tuya-panel-kit';
import { StatusBar } from 'react-native';
import composeLayout from './composeLayout';
import { store } from './models';
import Home from './native-pages';

console.disableYellowBox = true;

const router: NavigationRoute[] = [
  {
    name: 'main',
    component: Home,
    options: {
      title: 'Home',
      renderStatusBar: () => <StatusBar barStyle="default" />,
    },
  },
];

interface Props {
  theme: GlobalTheme;
}

const Navigator = createNavigator<Props>({
  router,
  screenOptions: {},
});

export default composeLayout(store, Navigator);
