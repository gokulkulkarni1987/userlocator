import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View>
        <Text>Hello World!!!</Text>
      </View>
    )
  }
}

export default HomeScreen;