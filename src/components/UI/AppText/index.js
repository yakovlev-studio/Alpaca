import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {Base} from './styles';

const AppText = ({children, style, ...otherProps}) => {
  const {bold} = otherProps;
  const fontWeight = bold ? 'bold' : 'normal';

  return <Text style={[Base.main, style, {fontWeight}]}>{children}</Text>;
};

AppText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

AppText.defaultProps = {
  style: {},
};
export default AppText;
