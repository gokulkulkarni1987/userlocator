import React from "react";
import { StatusBar, Platform, View, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Icon } from "react-native-elements";

onMenuClicked = (props) => {
  props.navigation.toggleDrawer();
}

const HeaderView = props => {

  return (
    <View>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "transparent",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
      <TouchableWithoutFeedback
        style={{
          padding: 10
        }}
        onPress={() => onMenuClicked(props)}
      >
        <Icon name="menu" color="black" />
      </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default HeaderView;
