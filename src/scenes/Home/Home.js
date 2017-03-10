import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Style from './Style';
import profileImage from './profile-image.png';
import musicImage from './music-image.png';
import photosImage from './photos-image.png';
import friendsImage from './friends-image.png';
import findRoute from './../../utils/findRoute';

export default class Home extends Component {

  navigate = (title) => {
    const {
      navigator,
      routes,
    } = this.props;

    const route = findRoute(routes, title);
    navigator.push(route);
  };

  render() {
    const {
      title,
    } = this.props;

    return (
      <View style={Style.homeScene}>
        <View style={Style.homeBlocksContainer}>
          <TouchableHighlight
            style={Style.homeBlock}
            underlayColor="transparent"
            onPress={() => {this.navigate('Profile');}}
          >
            <View
              style={Style.homeBlockWrapper}>
              <Image
                source={profileImage}
                style={Style.homeBlockImage}
              />
              <Text>My Profile</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={Style.homeBlock}
            underlayColor="transparent"
            onPress={() => {this.navigate('Music');}}
          >
            <View
              style={Style.homeBlockWrapper}>
              <Image
                source={musicImage}
                style={Style.homeBlockImage}
              />
              <Text>My Music</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={Style.homeBlock}
            underlayColor="transparent"
            onPress={() => {this.navigate('Photos');}}
          >
            <View
              style={Style.homeBlockWrapper}>
              <Image
                source={photosImage}
                style={Style.homeBlockImage}
              />
              <Text>My Photos</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={Style.homeBlock}
            underlayColor="transparent"
            onPress={() => {this.navigate('Friends');}}
          >
            <View
              style={Style.homeBlockWrapper}>
              <Image
                source={friendsImage}
                style={Style.homeBlockImage}
              />
              <Text>My Friends</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  };
};