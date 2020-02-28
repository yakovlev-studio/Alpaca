import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const InputFieldMessage = ({errorText, ...otherProps}) => {
  return (
    <View style={styles.errorContainer}>
      <Text {...otherProps} style={[styles.text, styles.errorText]}>
        {errorText}
      </Text>
    </View>
  );
};

InputFieldMessage.defaultProps = {
  errorText: false,
};

InputFieldMessage.propTypes = {
  errorText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default InputFieldMessage;
