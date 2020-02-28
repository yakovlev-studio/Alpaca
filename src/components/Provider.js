import React from 'react';
import {StyleSheet, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const providerMap = {
  password: 'email-lock',
  facebook: 'facebook',
  google: 'google',
  phone: 'phone',
};

function Provider({theme, type, active, style}) {
  const icon = providerMap[type];

  if (!icon) {
    return null;
  }

  return (
    <View style={[style, styles[active ? 'active' : 'inactive']]}>
      <Icon
        name={icon}
        size={24}
        color={active ? theme.colors.primary : '#000'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inactive: {
    opacity: 0.3,
  },
  active: {
    opacity: 1,
  },
});

export default withTheme(Provider);
