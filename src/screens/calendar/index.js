import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UserContext} from '../../App';
import {Colors} from '../../styles';
import auth from '@react-native-firebase/auth';

const CalendarScreen = ({navigation}) => {
  const user = useContext(UserContext);
  const [signingOut, setSigningOut] = useState(false);
  async function signOut() {
    setSigningOut(true);
    await auth().signOut();
  }

  return (
    <View style={styles.screen}>
      <Text>{user.name}</Text>
      <Text>{user.lastName}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phoneNumber}</Text>
      <Button title="Sign out" onPress={signOut} />
      <Button
        title="Go to orderPlacement"
        onPress={() => navigation.navigate('PlaceOrder')}
      />
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GRAY_LIGHT,
  },
});
