import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Base} from './styles';

const Card = ({children, style, ...props}) => (
  <View style={[Base.main, style]} {...props}>
    {children}
  </View>
);

Card.defaultProps = {
  style: {},
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

export default Card;
