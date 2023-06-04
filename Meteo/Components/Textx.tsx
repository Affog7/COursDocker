import React from 'react';
import { View, Text } from 'react-native';

const StringComponent = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default StringComponent;
