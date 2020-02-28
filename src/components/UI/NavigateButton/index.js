import React from 'react';
import PropTypes from 'prop-types';
import {withNavigation} from '@react-navigation/compat';
import Button from '../Button';

const NavigateButton = ({children, navigation, to, ...otherProps}) => (
  <Button {...otherProps} onPress={() => navigation.navigate(to)}>
    {children}
  </Button>
);

NavigateButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};

export default withNavigation(NavigateButton);
