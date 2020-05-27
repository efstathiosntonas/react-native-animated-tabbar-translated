import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {initReactI18next} from 'react-i18next';
import i18next from 'i18next';
import {i18nextOptions} from './src/utils/18n';

i18next.use(initReactI18next).init(i18nextOptions);

AppRegistry.registerComponent(appName, () => App);

export default i18next;
