import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../styles';
import AppText from '../AppText';
import PropTypes from 'prop-types';

const NavigateLink = ({onPress, style, size, children, ...otherProps}) => {
  const labelStyles = {
    ...styles.label,
    ...(size === 'small' && {fontSize: 14}),
  };
  return (
    <TouchableOpacity
      {...otherProps}
      style={[style]}
      onPress={onPress}
      activeOpacity={0.6}>
      <AppText style={labelStyles}>{children}</AppText>
    </TouchableOpacity>
  );
};

NavigateLink.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  size: PropTypes.string,
};

NavigateLink.defaultProps = {
  size: 'medium',
  style: {},
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: Colors.INFO,
  },
});

export default NavigateLink;
