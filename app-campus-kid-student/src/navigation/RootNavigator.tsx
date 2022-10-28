import React, { memo } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import TabsNavigator from './TabsNavigator';
import { Routes } from '@shared_constants';
import { NavigationContainer } from '@react-navigation/native';
import { MovieDetailScreen } from '@modules/movie';
import { SerieDetailScreen } from '@modules/serie';
import { LoginScreen } from '@modules/student';

const Stack = createStackNavigator();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: false
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.STUDENT.LOGIN}
          component={LoginScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name={Routes.NAVIGATORS.TABS}
          component={TabsNavigator}
          options={defaultOptions}
        />
        <Stack.Screen
          name={Routes.MOVIES.MOVIE_DETAIL}
          component={MovieDetailScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name={Routes.SERIES.SERIE_DETAIL}
          component={SerieDetailScreen}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default memo(RootNavigator);
