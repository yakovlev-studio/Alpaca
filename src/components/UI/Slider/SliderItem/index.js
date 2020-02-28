import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Logo from '../../../../assets/images/alpaca.svg';

const SliderEntry = ({data}) => (
  <View style={styles.slideInnerContainer}>
    <View style={styles.contentContainer}>
      <View style={styles.logoContainer}>
        <Logo width={300} height={150} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>{data.subtitle}</Text>
      </View>
    </View>
  </View>
);

SliderEntry.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(SliderEntry);
