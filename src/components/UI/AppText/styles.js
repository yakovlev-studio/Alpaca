import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../../styles';

const Base = StyleSheet.create({
  main: {
    fontSize: 16,
    color: Colors.GRAY_DARK,
    ...Platform.select({
      ios: {
        fontFamily: 'San Francisco',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
});

export {Base};
