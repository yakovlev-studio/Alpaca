import React, {useRef, useEffect, useState} from 'react';
import {View, ScrollView, Keyboard, Alert} from 'react-native';
import {Formik} from 'formik';
import {Colors} from '../../styles';
import SafeAreaView from 'react-native-safe-area-view';

import PropTypes from 'prop-types';
import {validateFormInputs} from '../../utils';

import {GlobalStyles} from '../../styles';

import FormInput from '../../components/UI/FormInput';
import NavigateLink from '../../components/UI/NavigateLink';
import NavigateButton from '../../components/UI/NavigateButton';
import Button from '../../components/UI/Button';
import AppText from '../../components/UI/AppText';
import Form from '../../components/UI/Card';
import NavigateIcon from '../../components/UI/NavigateIcon';

import auth from '@react-native-firebase/auth';

const SignInScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (error) {
      Alert.alert('Sign In - Error', error);
    }
  }, [error]);

  async function onAttemptSignIn(values, {setSubmitting, resetForm}) {
    const {email, password} = values;
    try {
      setLoading(true);
      setError('');
      await auth().signInWithEmailAndPassword(email, password);
      resetForm();
      setSubmitting(false);
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
      setLoading(false);
      setSubmitting(false);
      resetForm();
    }
  }

  const emailTextInput = useRef(null);
  const passwordTextInput = useRef(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={GlobalStyles.FormStyles.contentContainer}
        keyboardShouldPersistTaps="handled"
        style={GlobalStyles.FormStyles.container}>
        <Form style={GlobalStyles.FormStyles.form}>
          <View style={GlobalStyles.FormStyles.iconContainer}>
            <NavigateIcon
              to="Welcome"
              name="arrow-left"
              size={28}
              color={Colors.GRAY_DARK}
            />
          </View>
          <AppText style={GlobalStyles.FormStyles.formTitle} bold>
            Вход в приложение
          </AppText>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, actions) => {
              onAttemptSignIn(values, actions);
            }}
            validate={validateFormInputs}>
            {formikProps => {
              // console.log(formikProps);
              return (
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
                    onSubmitEditing={Keyboard.dismiss}
                  />

                  <View style={GlobalStyles.FormStyles.btnContainer}>
                    <NavigateLink
                      style={{alignSelf: 'flex-end'}}
                      size="small"
                      onPress={() => navigation.navigate('ForgotPassword')}>
                      Забыли пароль?
                    </NavigateLink>

                    <Button
                      style={GlobalStyles.FormStyles.btn}
                      type="button"
                      isLoading={formikProps.isSubmitting}
                      disabled={
                        !formikProps.isValid || formikProps.isSubmitting
                      }
                      onPress={formikProps.handleSubmit}>
                      Войти
                    </Button>

                    <NavigateButton to="SignUp" type="link">
                      Регистрация
                    </NavigateButton>
                  </View>
                </>
              );
            }}
          </Formik>
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignInScreen;
