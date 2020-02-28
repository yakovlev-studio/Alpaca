import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles';
import {sliderHeight} from './SliderItem/styles';

export default StyleSheet.create({
  carouselContainer: {
    height: sliderHeight,
  },
  slider: {
    overflow: 'visible', // for custom animations
  },
  title: {
    color: Colors.GRAY_DARK,
    fontSize: 56,
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.GRAY_DARK,
    fontSize: 24,
  },
  paginationContainer: {
    paddingTop: 0,
    paddingBottom: 32,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
