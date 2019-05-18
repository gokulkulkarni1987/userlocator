import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListUserScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Users',
  };

  render() {
    return (
      <View>
        <Text>Hello World!!!</Text>
      </View>
    )
  }
}

export default ListUserScreen;