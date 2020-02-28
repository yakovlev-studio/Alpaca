import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import VehiclesScreen from '../screens/vehicles';
import {Colors} from '../styles';

const Stack = createStackNavigator();

function VehiclesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Vehicles"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}>
      <Stack.Screen name="Vehicles" component={VehiclesScreen} />
    </Stack.Navigator>
  );
}

export default VehiclesStack;
