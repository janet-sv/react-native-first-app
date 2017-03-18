import React, { Component } from 'react';
import { View, Text, BackAndroid } from 'react-native';
import Style from './Style';

export default class Friends extends Component {
  render() {
    const {
      title,
    } = this.props;

    return (
      <View style={Style.friendsContainer}>
        <Text>Hi! This is the {title}.</Text>
      </View>
    )
  };
};