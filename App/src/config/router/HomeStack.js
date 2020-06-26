import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Importing screens
 */
import App from './../../index';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name={'Home'}
        component={App}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
