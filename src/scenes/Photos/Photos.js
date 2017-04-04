import React, { Component } from 'react';
import { View, Text, BackAndroid } from 'react-native';
import Style from './Style';

export default class Photos extends Component {
  render() {
    const {
      title,
      navigator,
    } = this.props;

    return (
      <View style={Style.photosContainer}>
        <Text>Hi! This is the {title}.</Text>
      </View>
    )
  };
};