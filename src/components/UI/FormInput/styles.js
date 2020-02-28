import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: Colors.GRAY_MEDIUM,
    textAlignVertical: 'center',
  },
  inputFieldSection: {
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 1,
    zIndex: 1,
  },
});

export default styles;
