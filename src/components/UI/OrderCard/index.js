import React from 'react';
import {View, Text, Alert} from 'react-native';
import Card from '../Card';
import {Colors} from '../../../styles';
import styles from './styles';

import TouchableSvgIcon from '../TouchableSvgIcon';

const CardHeader = ({date, time}) => {
  return (
    <View style={styles.header}>
      <Text>{date}</Text>
      <Text>{time}</Text>
    </View>
  );
};

const CardBody = ({companyInfo, companyName}) => {
  return (
    <View>
      <Text style={styles.title}>{companyName}</Text>
      <Text style={styles.subtitle}>{companyInfo}</Text>
    </View>
  );
};

const OrderStatusIndicator = ({status = ''}) => {
  const color = {
    new: 'SUCCESS',
    finished: 'INFO',
    cancelled: 'GRAY_MEDIUM',
  }[status];
  return (
    <View
      style={[
        styles.indicator,
        {
          backgroundColor: Colors[color],
        },
      ]}
    />
  );
};

const OrderCard = ({
  orderData: {status, date, time, companyName, companyInfo},
  onIconPress,
}) => {
  return (
    <Card style={styles.card}>
      <CardHeader date={date} time={time} />
      <CardBody companyInfo={companyInfo} companyName={companyName} />
      <OrderStatusIndicator status={status} />
      <TouchableSvgIcon
        name="more-vert"
        size={22}
        style={styles.icon}
        onIconPress={onIconPress}
      />
    </Card>
  );
};

export default OrderCard;
