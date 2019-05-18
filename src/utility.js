import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const getMapGeoDelta = () => {
  /*const distance = 10;
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
  const circumference = 40075;
  const angularDistance = distance / circumference;

  const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
  const longitudeDelta = Math.abs(Math.atan2(
          Math.sin(angularDistance) * Math.cos(latitude),
          Math.cos(angularDistance) - Math.sin(latitude) * Math.sin(latitude)));*/
  const latitudeDelta = 0.8;
  const longitudeDelta = latitudeDelta * (screenWidth / screenHeight);
  return { latitudeDelta, longitudeDelta };
};