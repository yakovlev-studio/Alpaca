import React from 'react';
import {TouchableNativeFeedback} from 'react-native';

// gray
import BackLeft from '../../../assets/icons/gray/back_left.svg';
import More from '../../../assets/icons/gray/More.svg';
import CheckBoxOff from '../../../assets/icons/gray/CheckboxOff.svg';
import Filter from '../../../assets/icons/gray/filter.svg';

const NAMES_TO_SVG_MAPPING = {
  'more-vert': More,
  'back-left': BackLeft,
  'checkbox-off': CheckBoxOff,
  'filter-icon': Filter,
};

const TouchableSvgIcon = ({onIconPress, name, size, style, ...otherProps}) => {
  const Icon = NAMES_TO_SVG_MAPPING[name];
  return (
    <TouchableNativeFeedback onPress={onIconPress}>
      <Icon
        style={style}
        // width={size}
        height={size}
        {...otherProps}
      />
    </TouchableNativeFeedback>
  );
};

export default TouchableSvgIcon;
