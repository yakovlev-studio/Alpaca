import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function getSocialColor(type) {
  switch (type) {
    case 'facebook':
      return '#4267B2';
    case 'google':
      return '#F96458';
    case 'phone':
      return '#b24292';
  }
}

function ProviderButton({style, type, onPress, loading, children}) {
  return (
    <Button
      style={[styles.button, style]}
      icon={() => <Icon name={type} color="#fff" size={17} />}
      mode="contained"
      color={getSocialColor(type)}
      dark
      loading={loading}
      onPress={() => (loading ? null : onPress())}>
      {children}
    </Button>
  );
}

export default ProviderButton;

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    width: 300,
  },
});
