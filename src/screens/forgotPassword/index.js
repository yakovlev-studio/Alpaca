import React, {useEffect, useState} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {Formik} from 'formik';
import {Colors} from '../../styles';
import SafeAreaView from 'react-native-safe-area-view';

import PropTypes from 'prop-types';
import {validateFormInputs} from '../../utils';

import {GlobalStyles} from '../../styles';

import FormInput from '../../components/UI/FormInput';
import Button from '../../components/UI/Button';
import AppText from '../../components/UI/AppText';
import Form from '../../components/UI/Card';
import NavigateIcon from '../../components/UI/NavigateIcon';

import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({navigation}) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (error) {
      Alert.alert('Forgot Password - Error', error);
    }
  }, [error]);

  async function attemptReset({email}, {setSubmitting, resetForm}) {
    try {
      setLoading(true);
      setError('');
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Проверьте почту',
        `Ссылка для восстановления пароля была отправлена на почтовый ящик
          ${email}
          .Пожалуйста следуйте инструкциям в письме.`,
      );
      navigation.goBack();
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
      resetForm();
      setSubmitting(false);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={GlobalStyles.FormStyles.contentContainer}
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
          <AppText style={GlobalStyles.FormStyles.formTitle} bold>
            Восстановление пароля
          </AppText>
          <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={(values, actions) => {
              attemptReset(values, actions);
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
                  />

                  <View style={GlobalStyles.FormStyles.btnContainer}>
                    <Button
                      style={GlobalStyles.FormStyles.btn}
                      type="button"
                      isLoading={formikProps.isSubmitting}
                      disabled={
                        !formikProps.isValid || formikProps.isSubmitting
                      }
                      onPress={formikProps.handleSubmit}>
                      Отправить
                    </Button>
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

export default ForgotPasswordScreen;
