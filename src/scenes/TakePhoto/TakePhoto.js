import React, { Component } from 'react';
import { View, Text, BackAndroid } from 'react-native';
import Style from './Style';
import PhotoCanvas from './../../components/PhotoCanvas/PhotoCanvas';

export default class Music extends Component {
  state = {
    imagePath: '',
  };

  takePicture = () => {
    camera.capture()
    .then((data) => this.setState({imagePath: data.path}))
    .catch(err => console.error(err));
  };

  render() {
    const {
      title,
      navigator,
    } = this.props;


    return (
      <View style={Style.musicContainer}>
        <Text>Hi! This is the {title}.</Text>
        <PhotoCanvas
            imagePath = {this.state.imagePath}
            takePicture = {this.takePicture}
         />
      </View>
    )
  };
};