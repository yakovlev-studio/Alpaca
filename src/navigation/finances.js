import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FinancesScreen from '../screens/finances';
import {Colors} from '../styles';

const Stack = createStackNavigator();

function FinancesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Finances"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}>
      <Stack.Screen name="Finances" component={FinancesScreen} />
    </Stack.Navigator>
  );
}

export default FinancesStack;
