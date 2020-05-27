import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {translate} from './utils/18n';
import List from './screens/List';
import Map from './screens/Map';

const Tab = createBottomTabNavigator();
const MapStack = createStackNavigator();
const ListStack = createStackNavigator();
const RootStack = createStackNavigator();

const MapStackScreen = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="Map" component={Map} />
    </MapStack.Navigator>
  );
};

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Places List" component={List} />
    </ListStack.Navigator>
  );
};

const tabs = {
  [translate('TABS.MAP')]: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: <FontAwesome size={20} name="map-marked-alt" />,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  [translate('TABS.LIST')]: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: <FontAwesome size={20} name="list" />,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        safeAreaInset: {top: 'never', bottom: 'never'},
      }}
      tabBar={(props) => <AnimatedTabBar tabs={tabs} {...props} />}>
      <Tab.Screen name={translate('TABS.MAP')} component={MapStackScreen} />
      <Tab.Screen name={translate('TABS.LIST')} component={ListStackScreen} />
    </Tab.Navigator>
  );
};

export default function AppContainer() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Map"
        component={Tabs}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}
