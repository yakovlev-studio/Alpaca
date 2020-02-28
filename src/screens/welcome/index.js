import React from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from '../../components/UI/Slider';
import NavigateButton from '../../components/UI/NavigateButton';

const WelcomeScreen = () => (
  <View style={styles.container}>
    <Slider />
    <NavigateButton style={styles.btn} to="SignIn">
      Арендовать спецтехнику
    </NavigateButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  btn: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
  },
});

export default WelcomeScreen;
