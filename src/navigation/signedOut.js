import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ForgotPasswordScreen from '../screens/forgotPassword';
import SignInScreen from '../screens/signIn';
import WelcomeScreen from '../screens/welcome';
import SignUpScreen from '../screens/signUp';
import {Colors} from '../styles';

const Stack = createStackNavigator();

function SignedOutStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
          },
          headerTintColor: Colors.WHITE,
        }}>
        <Stack.Screen
          name="Welcome"
          options={{headerShown: false}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={{headerShown: false}}
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SignedOutStack;
