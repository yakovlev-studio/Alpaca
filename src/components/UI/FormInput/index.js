import React, {useState} from 'react';
import {View, TextInput, Alert} from 'react-native';
import styles from './styles';
import {Colors} from '../../../styles';
import InputFieldMessage from '../InputFieldMessage';
import TouchableIcon from '../TouchableIcon';
import {AsYouType} from 'libphonenumber-js/mobile';
import TouchableSvgIcon from '../TouchableSvgIcon';

const renderIcon = (passwordsVisibility, setPasswordsVisibility, formikKey) => {
  let Touchable = null;
  // Password icon
  if (formikKey === 'password' || formikKey === 'confirmPassword') {
    Touchable = (
      <TouchableIcon
        style={styles.icon}
        onIconPress={() =>
          setPasswordsVisibility(prevState => ({
            ...prevState,
            [formikKey]: !prevState[formikKey],
          }))
        }
        name={passwordsVisibility[formikKey] ? 'eye' : 'eye-off'}
        size={18}
        color={Colors.GRAY_MEDIUM}
      />
    );
  }
  // Filter icon
  if (formikKey === 'operator' || formikKey === 'paymentMethod') {
    Touchable = (
      <TouchableSvgIcon
        style={styles.icon}
        onIconPress={() => Alert.alert(`${formikKey} pressed`, 'ok')}
        name="filter-icon"
        size={20}
      />
    );
  }
  return Touchable;
};

const FormInput = React.forwardRef(
  ({formikProps, formikKey, onSubmitEditing, label, ...rest}, ref) => {
    const [passwordsVisibility, setPasswordsVisibility] = useState({
      password: true,
      confirmPassword: true,
    });
    // const [isFocused, setFocused] = useState(false);
    // let animatedIsFocused = new Animated.Value(0);

    // useEffect(() => {
    //   Animated.timing(animatedIsFocused, {
    //     toValue: isFocused ? 1 : 0,
    //     duration: 300,
    //   }).start();
    // });

    // useEffect(() => {
    //   console.log(formikProps);
    // }, [formikProps]);

    const inputStyles = {...styles.input};
    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
      inputStyles.borderColor = Colors.ALERT;
    } else if (
      formikProps.touched[formikKey] &&
      formikProps.errors[formikKey] === undefined
    ) {
      inputStyles.borderColor = Colors.SUCCESS;
    }

    const lastKeyInForm = Object.keys(formikProps.values)[
      Object.keys(formikProps.values).length - 1
    ];

    const MaybePhoneNumber = (formikKey, value) => {
      if (formikKey === 'phoneNumber') {
        const asYouType = new AsYouType('RU');
        return asYouType.input(value);
      }
      return value;
    };

    const onChangeTextHandler = (value, formikProps, formikKey) => {
      return formikProps.setFieldValue(
        formikKey,
        MaybePhoneNumber(formikKey, value),
      );
    };

    // const labelStyle = {
    //   position: 'absolute',
    //   left: 0,
    //   top: animatedIsFocused.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [18, 0],
    //   }),
    //   fontSize: animatedIsFocused.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [16, 12],
    //   }),
    // };

    return (
      <>
        <View style={styles.inputFieldSection}>
          {/* <Animated.Text style={labelStyle}>{label}</Animated.Text> */}
          <TextInput
            style={inputStyles}
            onChangeText={value =>
              onChangeTextHandler(value, formikProps, formikKey)
            }
            // onFocus={() => setFocused(true)}
            onBlur={formikProps.handleBlur(formikKey)}
            value={formikProps.values[formikKey]}
            ref={ref}
            onSubmitEditing={onSubmitEditing}
            underlineColorAndroid="transparent"
            returnKeyType={lastKeyInForm === formikKey ? 'done' : 'next'}
            blurOnSubmit={false}
            secureTextEntry={passwordsVisibility[formikKey]}
            {...rest}
          />

          {/* <Item floatingLabel>
            <Label>Test</Label>
            <Input
              style={inputStyles}
              onChangeText={value =>
                onChangeTextHandler(value, formikProps, formikKey)
              }
              // onFocus={() => setFocused(true)}
              onBlur={formikProps.handleBlur(formikKey)}
              value={formikProps.values[formikKey]}
              ref={ref}
              onSubmitEditing={onSubmitEditing}
              underlineColorAndroid="transparent"
              returnKeyType={
                lastKeyInForm === formikKey ? 'done' : 'next'
              }
              blurOnSubmit={false}
              secureTextEntry={passwordsVisibility[formikKey]}
              {...rest}
            />
          </Item> */}

          {renderIcon(passwordsVisibility, setPasswordsVisibility, formikKey)}
        </View>
        <InputFieldMessage
          errorText={
            formikProps.touched[formikKey] && formikProps.errors[formikKey]
          }
        />
      </>
    );
  },
);

FormInput.displayName = 'FormInput';

export default FormInput;
