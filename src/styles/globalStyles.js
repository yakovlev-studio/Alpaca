import {StyleSheet} from 'react-native';
import {FONT_BOLD, FONT_SIZE_16} from './typography';
import {Colors} from '../styles';

const TextStyles = StyleSheet.create({
  title: {
    ...FONT_BOLD,
    color: Colors.GRAY_DARK,
    fontSize: FONT_SIZE_16,
  },
});

const FormStyles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    // width: '100%',
    paddingHorizontal: 16,
    // backgroundColor: Colors.GRAY_LIGHT,
  },
  form: {
    paddingTop: 32,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    marginVertical: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    textAlignVertical: 'center',
  },
  inputFieldSection: {
    width: '100%',
    justifyContent: 'center',
  },
  iconContainer: {
    zIndex: 1,
    position: 'absolute',
    left: 16,
    top: 30,
  },
  icon: {
    position: 'absolute',
    right: 1,
    zIndex: 1,
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: 32,
  },
});

export {TextStyles, FormStyles};
