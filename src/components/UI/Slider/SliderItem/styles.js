import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../styles';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const margin = 16;

// Single Slide
export const slideHeight = viewportHeight * 0.8;
export const itemWidth = viewportWidth - 32;

// Slider
export const sliderWidth = itemWidth;
export const sliderHeight = slideHeight;

const itemBorderRadius = 4;

export default StyleSheet.create({
  slideInnerContainer: {
    flex: 1,
    marginBottom: margin,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.WHITE,
    borderRadius: itemBorderRadius,
    paddingVertical: 16,
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  title: {
    color: Colors.GRAY_DARK,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 20,
    color: Colors.GRAY_DARK,
    fontSize: 16,
    textAlign: 'center',
  },
});
