import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function User({ navigation }) {
  console.tron.log(navigation.getParam('user'));

  return (
    <View>
      <Text>User</Text>
    </View>
  );
}

User.navigationOptions = {
  title: 'User',
};
