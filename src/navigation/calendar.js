import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CalendarScreen from '../screens/calendar';
import PlaceOrderScreen from '../screens/placeOrder';
import {Colors} from '../styles';

const Stack = createStackNavigator();

function CalendarStack() {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}>
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
}

export default CalendarStack;
