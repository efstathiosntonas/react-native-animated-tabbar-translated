import React, {Component} from 'react';
import AppNavigator from './Router';
import {NavigationContainer} from '@react-navigation/native';
import i18next from '../index';
import AsyncStorage from '@react-native-community/async-storage';

console.disableYellowBox = true;

class App extends Component {
  async componentDidMount() {
    const language = await AsyncStorage.getItem('language');
    console.log(language);
    await i18next.changeLanguage(language);
  }

  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
