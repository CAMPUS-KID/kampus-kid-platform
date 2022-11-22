import React, { memo } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import TabsNavigator from './TabsNavigator';
import { Routes } from '@shared_constants';
import { NavigationContainer } from '@react-navigation/native';
import { SubjectDetailScreen, SubjectDetailScreenProps } from '@modules/subject';
import { AccountDetailScreen } from '@modules/account';
import { LoginScreen } from '@modules/auth';

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
          component={SubjectDetailScreen}
          initialParams={{ subjectId: 42 }}
          options={defaultOptions}
        />
        <Stack.Screen
          name={Routes.SERIES.SERIE_DETAIL}
          component={AccountDetailScreen}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default memo(RootNavigator);
