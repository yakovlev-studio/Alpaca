import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const VehiclesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>VehiclesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default VehiclesScreen;
