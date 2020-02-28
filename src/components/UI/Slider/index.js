import React from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import data from './entries.json';
import {sliderWidth, itemWidth, sliderHeight} from './SliderItem/styles';
import SliderItem from './SliderItem';
import styles from './styles';
import {Colors} from '../../../styles';

const SLIDER_FIRST_ITEM = 0;
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderItem"] }] */
class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderActiveSlide: SLIDER_FIRST_ITEM,
    };
  }

  renderItem({item}) {
    return <SliderItem data={item} />;
  }

  render() {
    const {sliderActiveSlide} = this.state;
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={c => (this.sliderRef = c)}
          data={data.entries}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={sliderHeight}
          itemWidth={itemWidth}
          firstItem={SLIDER_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0}
          loop
          containerCustomStyle={styles.slider}
          onSnapToItem={index => this.setState({sliderActiveSlide: index})}
        />
        <Pagination
          dotsLength={data.entries.length}
          activeDotIndex={sliderActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={Colors.PRIMARY}
          dotStyle={styles.paginationDot}
          inactiveDotColor={Colors.GRAY_MEDIUM}
          inactiveDotScale={1}
          carouselRef={this.sliderRef}
          tappableDots={!!this.sliderRef}
        />
      </View>
    );
  }
}

export default Slider;
