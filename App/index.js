import { SafeAreaView } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import Screen from './src/';
import store from './src/config/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Screen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;