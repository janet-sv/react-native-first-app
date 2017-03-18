import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Camera from 'react-native-camera';
import TouchableIcon from './../TouchableIcon/TouchableIcon';
import cameraIcon from './camera-icon.png';
import backCamera from './back-camera.png';
import frontCamera from './front-camera.png';
import clearIcon from './clear-icon.png';
import Style from './Style';

export default class TakePhoto extends Component {
  state = {
    isBackType: true,
  };

  onTakePicture = () => {
    const {
      onTakePicture,
    } = this.props;

    this.camera.capture()
    .then((data) => onTakePicture(data.path))
    .catch(err => console.error(err));
  };

  render() {

    const {
      isBackType,
    } = this.state;

    const {
      onClose,
    } = this.props;

    const typeIconCamera = isBackType ? frontCamera : backCamera;
    const typeCamera = isBackType ? Camera.constants.Type.back : Camera.constants.Type.front;

    return (
      <View style = {Style.container}>
        <Camera
          ref = {(camera) => { this.camera = camera; }}
          style = {Style.preview}
          aspect = {Camera.constants.Aspect.fill}
          type = {typeCamera}
        >
          <TouchableIcon
            onPress={onClose}
            source={clearIcon}
            style={Style.close}
          />
          <TouchableIcon
            onPress={this.onTakePicture}
            source={cameraIcon}
            style={Style.capture}
          />
          <TouchableIcon
            onPress={() => this.setState({isBackType: !isBackType})}
            source={typeIconCamera}
            style={Style.changeType}
          />
        </Camera>
      </View>
    )
  };
};
