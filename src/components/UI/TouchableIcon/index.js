import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const TouchableIcon = ({onIconPress, style, ...otherProps}) => (
  <TouchableNativeFeedback onPress={onIconPress}>
    <Icon style={style} {...otherProps} />
  </TouchableNativeFeedback>
);

TouchableIcon.defaultProps = {
  style: {},
};

TouchableIcon.propTypes = {
  onIconPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

export default TouchableIcon;
