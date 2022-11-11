import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { TabBar } from '@shared_components';
import { Routes } from '@shared_constants';
import { SubjectListScreen } from '@modules/subject';
import { AccountDetailScreen, SerieListScreen } from '@modules/account';

const Tabs = createBottomTabNavigator();

const defaultOptions: BottomTabNavigationOptions = {
  headerShown: false
};

const TabsNavigator = () => {
  return (
    <Tabs.Navigator tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen
        name={Routes.MOVIES.MOVIE_LIST}
        component={SubjectListScreen}
        options={defaultOptions}
      />
      <Tabs.Screen
        name={Routes.SERIES.SERIE_LIST}
        component={AccountDetailScreen}
        options={defaultOptions}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
