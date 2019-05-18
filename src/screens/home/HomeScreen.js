import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { getMapGeoDelta, getRandomInRange } from "../../utility";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: screenHeight,
    width: screenWidth,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }
    };
  }

  renderMarker(user) {
    let location = {
      latitude: this.state.location.latitude + Math.floor(Math.random() * (1000 - 100) + 100) / 10000,
      longitude: this.state.location.longitude + Math.floor(Math.random() * (1000 - 100) + 100) / 10000
    };
    // location.latitude += Math.random();
    return (
      <Marker
        key={user.id}
        coordinate={location}
        title={user.first_name}
        description={user.last_name}
      />
    );
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(location => {
      const initialRegionDelta = getMapGeoDelta();
      this.setState({
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: initialRegionDelta.latitudeDelta,
          longitudeDelta: initialRegionDelta.longitudeDelta
        }
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.location}
        >
          {this.props.users.map(user => this.renderMarker(user))}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { ...users };
};

export default connect(mapStateToProps)(HomeScreen);
