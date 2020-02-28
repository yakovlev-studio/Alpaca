import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ActivityIndicator,
  LayoutAnimation,
} from 'react-native';
import PropTypes from 'prop-types';
import {Base, Link, Button as ButtonStyles} from './styles';
import AppText from '../AppText';
import {Colors} from '../../../styles';

const isAndroid = Platform.OS === 'android';

const Button = props => {
  const {rounded, children, onPress, style, disabled, isLoading, type} = props;

  const getTouchable = () => {
    if (type === 'link') {
      return TouchableOpacity;
    }
    return isAndroid ? TouchableNativeFeedback : TouchableOpacity;
  };

  const getTypeOfTouchable = () => {
    if (type === 'link') {
      return Link;
    }
    return ButtonStyles;
  };

  let Touchable = getTouchable();
  const typeOfTouchable = getTypeOfTouchable();

  const touchableProps = {
    disabled,
    activeOpacity: 0.6,
    ...Platform.select({
      android: {
        useForeground: true,
      },
    }),
    ...(type === 'link' && {style: {width: Base.main.width}}),
  };

  const labelProps = {
    ...(type === 'button' && {bold: true}),
  };

  const onButtonPressed = () => {
    LayoutAnimation.easeInEaseOut();
    onPress();
  };

  const renderLabel = label => {
    return (
      !isLoading && (
        <AppText
          {...labelProps}
          style={{
            color: style.color || typeOfTouchable.label.color,
          }}>
          {label}
        </AppText>
      )
    );
  };

  const renderActivityIndicator = () =>
    isLoading ? <ActivityIndicator size="small" color={Colors.WHITE} /> : null;

  return (
    <Touchable onPress={onButtonPressed} {...touchableProps}>
      <View
        style={[
          Base.main,
          typeOfTouchable.main,
          rounded ? Base.rounded : null,
          style,
          isLoading ? Base.loading : null,
        ]}>
        {renderLabel(children)}
        {renderActivityIndicator()}
      </View>
    </Touchable>
  );
};

Button.defaultProps = {
  style: {},
  rounded: false,
  disabled: false,
  loading: false,
  isLoading: false,
  link: false,
  fontSize: 16,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  isLoading: PropTypes.bool,
  link: PropTypes.bool,
  fontSize: PropTypes.number,
  type: PropTypes.string,
};

export default Button;
