import React from 'react';
import { StatusBar } from 'react-native';
import { createNavigator, GlobalTheme, NavigationRoute } from 'tuya-panel-kit';

import composeLayout from './composeLayout';
import { store } from './models';
import Home from './pages/panel-index';
import { routes } from './routes';

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
  ...routes.map(route => ({
    name: route.href,
    component: route.component,
    options: {
      title: route.name,
      renderStatusBar: () => <StatusBar barStyle="default" />,
    },
  })),
];

interface Props {
  theme: GlobalTheme;
}

const Navigator = createNavigator<Props>({
  router,
  screenOptions: {},
});

export default composeLayout(store, Navigator);
