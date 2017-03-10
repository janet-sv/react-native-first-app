import React, { Component } from 'react';
import { Image, View, ScrollView, Text, TouchableHighlight } from 'react-native';
import Style from './Style';
import backgroundHeader from './background-image.png';

export default class NavigationDrawer extends Component {
  render() {
    const {
      onPress,
      source,
      style,
    } = this.props;

    return (
      <View style={Style.navigationDrawer}>
        <View style={Style.navigationDrawerHeaderWrapper}>
          <Image
            style={Style.navigationDrawerHeaderBackground}
            source={backgroundHeader}
          >
          </Image>
        </View>
        <View style={Style.navigationDrawerContentWrapper}>
          <TouchableHighlight>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  };
};