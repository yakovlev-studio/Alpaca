import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {withTheme} from 'react-native-paper';
import CreateAccount from './CreateAccount';
// import ForgotPassword from './ForgotPassword';
import PhoneSignIn from './PhoneSignIn';
import SignIn from './SignIn';

import WelcomeScreen from '../screens/welcome';
import SignInScreen from '../screens/signIn';
import SignUpScreen from '../screens/signUp';
import ForgotPasswordScreen from '../screens/forgotPassword';

const Stack = createStackNavigator();

function SignedOutStack({theme}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.accent,
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          options={{title: 'Create Account'}}
          component={CreateAccount}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PhoneSignIn" component={PhoneSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withTheme(SignedOutStack);
