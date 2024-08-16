/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

function App() {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  if (device == null || !hasPermission) {
    return null;
  }

  return (
    <Camera
      isActive
      device={device}
      enableZoomGesture
      style={StyleSheet.absoluteFill}
    />
  );
}

export default App;
