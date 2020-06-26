import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/config/store';
import AppNavigator from './src/config/router';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
