/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import HomeScreen from "./src/screens/home/HomeScreen";
import ListUserScreen from "./src/screens/user/ListUserScreen";
import HeaderView from "./src/common/HeaderView";

const MainViewNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  defaultNavigationOptions: {
    header: props => <HeaderView
                        navigation={props.navigation}
                      />
  }
});

const ListViewNavigator = createStackNavigator({
  ListView: {
    screen: ListUserScreen
  }
}, {
  defaultNavigationOptions: {
    header: props => <HeaderView
                        navigation={props.navigation}
                      />
  }
})

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MainViewNavigator,
  },
  List: {
    screen: ListViewNavigator
  }
}, {
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: '#e91e63'
  },
});

export default createAppContainer(DrawerNavigator);