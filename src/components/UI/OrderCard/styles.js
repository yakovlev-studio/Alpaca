import {StyleSheet} from 'react-native';
import {Mixins, Colors} from '../../../styles';

const styles = StyleSheet.create({
  card: {
    paddingTop: 0,
    // marginHorizontal: 16,
    marginTop: 16,
    justifyContent: 'flex-start',
    ...Mixins.boxShadow(Colors.GRAY_MEDIUM, {height: 1, width: 1}, 5, 0.2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    height: 32,
  },
  title: {
    color: Colors.GRAY_DARK,
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 16,
  },
  subtitle: {
    color: Colors.GRAY_DARK,
    fontSize: 16,
  },
  indicator: {
    width: 4,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  icon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    zIndex: 2,
  },
});

export default styles;
