/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import HomeScreen from "./src/screens/home/HomeScreen";
import ListUserScreen from "./src/screens/user/ListUserScreen";

const MainViewNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const ListViewNavigator = createStackNavigator({
  ListView: {
    screen: ListUserScreen
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