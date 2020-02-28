import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CalendarStackScreen from './calendar';
import VehiclesStackScreen from './vehicles';
import FinancesStackScreen from './finances';
import {Colors} from '../styles';

// Active icons
import ActiveCalendar from '../assets/icons/coral/tab_calendar.svg';
import ActiveCreateAuto from '../assets/icons/coral/tab_CreateAuto.svg';
import ActiveFinAuto from '../assets/icons/coral/tab_FinAuto.svg';

// Inactive icons
import InactiveCalendar from '../assets/icons/gray/tab_calendar.svg';
import InactiveCreateAuto from '../assets/icons/gray/tab_CreateAuto.svg';
import InactiveFinAuto from '../assets/icons/gray/tab_FinAuto.svg';

const Tab = createMaterialBottomTabNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let IconComponent;
            if (route.name === 'CalendarTab') {
              IconComponent = focused ? (
                <ActiveCalendar width={23} height={23} />
              ) : (
                <InactiveCalendar width={23} height={23} />
              );
            } else if (route.name === 'VehiclesTab') {
              IconComponent = focused ? (
                <ActiveCreateAuto width={23} height={23} />
              ) : (
                <InactiveCreateAuto width={23} height={23} />
              );
            } else {
              IconComponent = focused ? (
                <ActiveFinAuto width={23} height={23} />
              ) : (
                <InactiveFinAuto width={23} height={23} />
              );
            }
            return IconComponent;
          },
        })}
        initialRouteName="CalendarTab"
        inactiveColor={Colors.GRAY_DARK}
        activeColor={Colors.PRIMARY}
        barStyle={{backgroundColor: Colors.WHITE}}>
        <Tab.Screen name="CalendarTab" component={CalendarStackScreen} />
        <Tab.Screen name="VehiclesTab" component={VehiclesStackScreen} />
        <Tab.Screen name="FinancesTab" component={FinancesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
