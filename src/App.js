import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Provider} from 'react-native-paper';

import theme from './theme';
import SignedInStack from './navigation/tabs';
import SignedOutStack from './navigation/signedOut';

export const UserContext = createContext(null);

function App() {
  const [initializing, setInitializing] = useState(true);
  const [listenUser, setListenUser] = useState(false);
  const [user, setUser] = useState(null);

  /** Listen for auth state changes */
  useEffect(() => {
    const authListener = auth().onAuthStateChanged(result => {
      setUser(result);
      if (initializing && !listenUser) {
        setInitializing(false);
        setListenUser(true);
      }
    });

    return () => {
      if (authListener) {
        authListener();
      }
    };
  }, [initializing, listenUser]);

  /** Listen for user changes */
  useEffect(() => {
    let userListener;

    if (listenUser) {
      userListener = auth().onUserChanged(result => {
        setUser(result);
      });
    }

    return () => {
      if (userListener) {
        userListener();
      }
    };
  }, [listenUser]);

  if (initializing) {
    return <Text>Loading...</Text>;
  }

  function container(children) {
    return <Provider theme={theme}>{children}</Provider>;
  }

  return container(
    user ? (
      <UserContext.Provider value={user}>
        <SignedInStack />
      </UserContext.Provider>
    ) : (
      <SignedOutStack />
    ),
  );
}

export default App;
