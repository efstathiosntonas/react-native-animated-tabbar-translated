import React, {Component} from 'react';
import AppNavigator from './Router';
import {NavigationContainer} from '@react-navigation/native';
import I18nProvider from './utils/i18nContext';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <I18nProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </I18nProvider>
    );
  }
}

export default App;
