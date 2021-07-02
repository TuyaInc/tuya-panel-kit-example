import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { createNavigator, GlobalTheme, NavigationRoute } from 'tuya-panel-kit';

import composeLayout from './composeLayout';
import { store } from './models';
import Home from './pages/panel-index';
import { routes } from './routes';

console.disableYellowBox = true;

const withScroll = (Compnent: React.ComponentType) => () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <Compnent />
    </ScrollView>
  </SafeAreaView>
);

const router: NavigationRoute[] = [
  {
    name: 'main',
    component: withScroll(Home),
    options: {
      title: 'Tuya Design',
      renderStatusBar: () => <StatusBar barStyle="default" />,
    },
  },
  ...routes.map(route => ({
    name: route.href,
    component: withScroll(route.component),
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
