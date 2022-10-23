import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { TabBar } from '@shared_components';
import { Routes } from '@shared_constants';
import { MovieListScreen } from '@modules/movie';
import { SerieListScreen } from '@modules/serie';

const Tabs = createBottomTabNavigator();

const defaultOptions: BottomTabNavigationOptions = {
  headerShown: false
};

const TabsNavigator = () => {
  return (
    <Tabs.Navigator tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen
        name={Routes.MOVIES.MOVIE_LIST}
        component={MovieListScreen}
        options={defaultOptions}
      />
      <Tabs.Screen
        name={Routes.SERIES.SERIE_LIST}
        component={SerieListScreen}
        options={defaultOptions}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
