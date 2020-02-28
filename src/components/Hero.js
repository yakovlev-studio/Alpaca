import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Hero({image, colors, height, children, style}) {
  return (
    <View style={[style, {height}]}>
      {!!image && (
        <Image
          style={[styles.absolute, styles.image]}
          source={{
            uri: image,
          }}
        />
      )}
      <LinearGradient colors={colors} style={styles.absolute} />
      <SafeAreaView style={styles.absolute}>{children}</SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  absolute: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Hero;
