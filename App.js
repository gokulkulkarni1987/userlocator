/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Provider } from 'react-redux';
import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import HomeScreen from "./src/screens/home/HomeScreen";
import ListUserScreen from "./src/screens/user/ListUserScreen";
import HeaderView from "./src/common/HeaderView";
import configureStore from './configureStore';

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

const DrawerNavigator = createAppContainer(createDrawerNavigator({
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
}));

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      store: configureStore(),
    };
  }

  render() {
    return (
      <Provider
        store={this.state.store}
      >
        <DrawerNavigator />
      </Provider>
    );
  }
}

export default App;