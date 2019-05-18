import React from 'react';
import { View } from 'react-native';
import { Card, Avatar, Text } from 'react-native-elements';

export default UserDetails = props => {
  return (
    <Card>
      <View
        style={{
          flex: 1,
          flexDirection: 'row'
        }}
      >
        <Avatar
          rounded
          size='large'
          source={{
            uri: props.user.avatar
          }}
        />
        <View
          style={{
            marginLeft: 10
          }}
        >
          <Text>{props.user.first_name} {props.user.last_name}</Text>
          <Text>{props.user.email}</Text>
        </View>
      </View>
    </Card>
  )
}