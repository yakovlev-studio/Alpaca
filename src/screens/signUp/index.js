import React, {useRef, useEffect, useState} from 'react';
import {View, ScrollView, Keyboard, Text, Alert} from 'react-native';
import {Formik} from 'formik';
import {getExampleNumber} from 'libphonenumber-js/mobile';
import examples from 'libphonenumber-js/examples.mobile.json';
import PropTypes from 'prop-types';
import {validateFormInputs} from '../../utils';

// Components
import NavigateIcon from '../../components/UI/NavigateIcon';
import Form from '../../components/UI/Card';
import FormInput from '../../components/UI/FormInput';
import Button from '../../components/UI/Button';
import SafeAreaView from 'react-native-safe-area-view';

// Styles
import {GlobalStyles, Colors} from '../../styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const SignUpScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const examplePhoneNumber = getExampleNumber('RU', examples);

  useEffect(() => {
    if (error) {
      Alert.alert('Create Account - Error', error);
    }
  }, [error]);

  async function onHandleSubmit(values, {setSubmitting, resetForm}) {
    const {email, password, name, lastName, phoneNumber} = values;
    try {
      setLoading(true);
      setError('');
      const authUser = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const ref = database().ref(`/users/${authUser.user.uid}`);
      await ref.set({
        name,
        lastName,
        phoneNumber,
        email,
        // roles
      });
    } catch (e) {
      switch (e.code) {
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled.');
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError('No user found or wrong password.');
          break;
        default:
          console.error(e);
          break;
      }
    } finally {
      setLoading(false);
      setSubmitting(false);
      resetForm();
    }
  }

  const emailTextInput = useRef(null);
  const passwordTextInput = useRef(null);
  const confirmPasswordTextInput = useRef(null);
  const nameTextInput = useRef(null);
  const lastNameTextInput = useRef(null);
  const phoneNumberTextInput = useRef(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={GlobalStyles.FormStyles.contentContainer}
        keyboardShouldPersistTaps="handled"
        style={GlobalStyles.FormStyles.container}>
        <Form style={GlobalStyles.FormStyles.form}>
          <View style={GlobalStyles.FormStyles.iconContainer}>
            <NavigateIcon
              to="SignIn"
              name="arrow-left"
              size={28}
              color={Colors.GRAY_DARK}
            />
          </View>
          <Text
            style={[
              GlobalStyles.TextStyles.title,
              GlobalStyles.FormStyles.formTitle,
            ]}>
            Регистрация
          </Text>

          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              name: '',
              lastName: '',
              phoneNumber: '',
            }}
            onSubmit={(values, actions) => {
              onHandleSubmit(values, actions);
            }}
            validate={validateFormInputs}>
            {formikProps => (
              <>
                <FormInput
                  formikProps={formikProps}
                  formikKey="email"
                  placeholder="Эл.почта"
                  keyboardType="email-address"
                  autoCompleteType="email"
                  onSubmitEditing={() => passwordTextInput.current.focus()}
                  ref={emailTextInput}
                />

                <FormInput
                  formikProps={formikProps}
                  formikKey="password"
                  placeholder="Пароль"
                  ref={passwordTextInput}
                  autoCompleteType="password"
                  onSubmitEditing={() =>
                    confirmPasswordTextInput.current.focus()
                  }
                />

                <FormInput
                  formikProps={formikProps}
                  formikKey="confirmPassword"
                  placeholder="Подтвердите пароль"
                  ref={confirmPasswordTextInput}
                  onSubmitEditing={() => nameTextInput.current.focus()}
                />

                <FormInput
                  formikProps={formikProps}
                  formikKey="name"
                  placeholder="Имя"
                  ref={nameTextInput}
                  onSubmitEditing={() => lastNameTextInput.current.focus()}
                />

                <FormInput
                  formikProps={formikProps}
                  formikKey="lastName"
                  placeholder="Фамилия"
                  ref={lastNameTextInput}
                  onSubmitEditing={() => phoneNumberTextInput.current.focus()}
                />

                <FormInput
                  formikProps={formikProps}
                  formikKey="phoneNumber"
                  keyboardType="numeric"
                  autoCompleteType="tel"
                  placeholder={examplePhoneNumber.formatNational()}
                  ref={phoneNumberTextInput}
                  onSubmitEditing={Keyboard.dismiss}
                />

                <View style={GlobalStyles.FormStyles.btnContainer}>
                  <Button
                    style={GlobalStyles.FormStyles.btn}
                    type="button"
                    isLoading={formikProps.isSubmitting}
                    disabled={!formikProps.isValid || formikProps.isSubmitting}
                    onPress={formikProps.handleSubmit}>
                    Зарегистрироваться
                  </Button>
                </View>
              </>
            )}
          </Formik>
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUpScreen;
