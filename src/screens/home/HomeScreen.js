import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { getMapGeoDelta } from '../../utility';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(location => {
      console.log('this is the locations: ', location);
      const initialRegionDelta = getMapGeoDelta();
      this.setState({
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: initialRegionDelta.latitudeDelta,
          longitudeDelta: initialRegionDelta.longitudeDelta,
        }
      });
    })
  }


  render() {
    return (
      <View
        style={styles.container}
      >
        <MapView
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.location}
        >
     </MapView>
      </View>
    )
  }
}

export default HomeScreen;