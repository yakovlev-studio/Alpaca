import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles';

const Base = StyleSheet.create({
  main: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: '100%',
  },
  rounded: {
    borderRadius: 25,
  },
  loading: {},
});

const Button = StyleSheet.create({
  main: {
    backgroundColor: Colors.PRIMARY,
  },
  label: {
    color: Colors.WHITE,
  },
});

const Link = StyleSheet.create({
  main: {
    backgroundColor: 'transparent',
  },
  label: {
    color: Colors.INFO,
  },
});

export {Base, Button, Link};
