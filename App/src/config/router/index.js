import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
