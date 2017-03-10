import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import Style from './Style';

export default class TouchableIcon extends Component {
  render() {
    const {
      onPress,
      source,
      style,
    } = this.props;

    return (
      <TouchableHighlight
        style={[Style.touchableIcon, style]}
        onPress={onPress}
        underlayColor="transparent"
      >
        <Image
          source={source}
          style={Style.icon}
        />
      </TouchableHighlight>
    )
  };
};