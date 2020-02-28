import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {withNavigation} from '@react-navigation/compat';

const NavigateIcon = ({navigation, to, data, ...iconProps}) => (
  <TouchableNativeFeedback
    useForeground
    onPress={() => navigation.navigate(to, data)}>
    <Icon {...iconProps} />
  </TouchableNativeFeedback>
);

NavigateIcon.defaultProps = {
  data: {},
};

NavigateIcon.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
};

export default withNavigation(NavigateIcon);
