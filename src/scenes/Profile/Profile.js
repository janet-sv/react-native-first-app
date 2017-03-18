import React, { Component } from 'react';
import { View, TextInput, Button, Text, BackAndroid, Image, ScrollView, TouchableHighlight, Modal } from 'react-native';
import Style from './Style';
import HelperStyle from './../../styles/HelperStyle';
import profileImage from './profile-image.png';
import PhotoCanvas from './../../components/PhotoCanvas/PhotoCanvas';
import TouchableIcon from './../../components/TouchableIcon/TouchableIcon';
import findRoute from './../../utils/findRoute';
import userIcon from './user-icon.png';
import phoneIcon from './phone-icon.png';
import pusheenFace from './pusheen-face.png';
import pusheenPhone from './pusheen-phone.png';
import photoIcon from './add-photo-icon.png';
import galleryIcon from './gallery-icon.png';
import okIcon from './ok-icon.png';
import clearIcon from './clear-icon.png';
import cameraIcon from './camera-icon.png';
import editIcon from './edit-icon.png';

export default class Profile extends Component {
  state = {
    isOpenedEditUsernameModal: false,
    isOpenedEditMobilePhoneModal: false,
    isOpenedTakePhotoModal: false,
    isOpenedPhotoCanvasModal: false,
    isOpenedPreviewPhotoModal: false,
    username: this.props.profile.username,
    mobilePhone: this.props.profile.mobilePhone,
    photoPath: this.props.profile.photoPath,
  };

  navigate = (title) => {
    const {
      navigator,
      routes,
    } = this.props;

    const route = findRoute(routes, title);
    navigator.push(route);
  };

  goToTakePhoto = () => {
    const {
      profile,
    } = this.props;

    this.setState({
      isOpenedTakePhotoModal: false,
      isOpenedPhotoCanvasModal:true,
      isOpenedPreviewPhotoModal: false,
      photoPath: profile.photoPath,
    });
  };

  closeModal = () => {
    const {
      profile,
    } = this.props;

    this.setState({
      isOpenedEditUsernameModal: false,
      isOpenedEditMobilePhoneModal: false,
      isOpenedTakePhotoModal: false,
      isOpenedPhotoCanvasModal: false,
      isOpenedPreviewPhotoModal: false,
      username: profile.username,
      mobilePhone: profile.mobilePhone,
      photoPath: profile.photoPath,
    });
  };

  savePhotoPath = (path) => {
    this.setState({
      photoPath: path,
      isOpenedPhotoCanvasModal: false,
      isOpenedPreviewPhotoModal: true,
    });
  };

  submitUsername = (e) => {
    const {
      parent,
    } = this.props;

    const {
      username,
    } = this.state;

    parent.editUsername(username);
    this.closeModal();
  };

  submitMobilePhone = (e) => {
    const {
      parent,
    } = this.props;

    const {
      mobilePhone,
    } = this.state;

    parent.editMobilePhone(mobilePhone);
    this.closeModal();
  };

  submitPhotoPath = (e) => {
    const {
      parent,
    } = this.props;

    const {
      photoPath,
    } = this.state;

    parent.editPhoto(photoPath);
    this.closeModal();
  };

  render() {
    const {
      title,
      profile,
    } = this.props;

    const {
      isOpenedEditUsernameModal,
      isOpenedEditMobilePhoneModal,
      isOpenedTakePhotoModal,
      isOpenedPhotoCanvasModal,
      isOpenedPreviewPhotoModal,
      username,
      mobilePhone,
      photoPath,
    } = this.state;

    const mobilePhoneText = profile.mobilePhone ? profile.mobilePhone : '---';

    const editUsernameModal = isOpenedEditUsernameModal ?
      <ScrollView style={Style.profileModal}>
        <View style={Style.profileModalWrapper}>
          <View style={Style.profileModalImageWrapper}>
            <Image
              style={Style.profileModalImage}
              source={pusheenFace}
            />
          </View>
          <Text style={Style.profileModalTitle}>
            Change your username
          </Text>
          <TextInput
            onChangeText={(text) => this.setState({username: text})}
            value={username}
            style={Style.profileModalTextInput}
            placeholder="Enter your username"
          />
          <Button title="ACCEPT" onPress={this.submitUsername}/>
          <TouchableHighlight
            onPress={this.closeModal}
            underlayColor="transparent"
          >
            <Text style={Style.profileModalCancelButton}>NOT NOW</Text>
          </TouchableHighlight>
        </View>
      </ScrollView> : null;

    const editMobilePhoneModal = isOpenedEditMobilePhoneModal ?
      <ScrollView style={Style.profileModal}>
        <View style={Style.profileModalWrapper}>
          <View style={Style.profileModalImageWrapper}>
            <Image
              style={Style.profileModalImage}
              source={pusheenPhone}
            />
          </View>
          <Text style={Style.profileModalTitle}>
            Change your Mobile Phone
          </Text>
          <TextInput
            onChangeText={(text) => this.setState({mobilePhone: text})}
            value={mobilePhone}
            style={Style.profileModalTextInput}
            placeholder="Enter your mobile phone"
          />
          <Button title="ACCEPT" onPress={this.submitUsername}/>
          <TouchableHighlight
            onPress={this.closeModal}
            underlayColor="transparent"
          >
            <Text style={Style.profileModalCancelButton}>NOT NOW</Text>
          </TouchableHighlight>
        </View>
      </ScrollView> : null;

    const takePhotoModal = isOpenedTakePhotoModal ?
      <View style={Style.profileModal}>
        <View style={Style.profileModalWrapper}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={this.goToTakePhoto}
          >
            <View style={Style.profileModalPhotoWrapper}>
              <Image
                style={Style.profileModalPhoto}
                source={photoIcon}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {}}
          >
            <View style={Style.profileModalPhotoWrapper}>
              <Image
                style={Style.profileModalPhoto}
                source={galleryIcon}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.closeModal}
            underlayColor="transparent"
          >
            <Text style={Style.profileModalCancelButton}>NOT NOW</Text>
          </TouchableHighlight>
        </View>
      </View> : null;

    const photoCanvasModal = isOpenedPhotoCanvasModal ?
      <View style={[Style.profilePhotoCanvasModal]}>
          <PhotoCanvas
            onTakePicture = {this.savePhotoPath}
            onClose = {this.closeModal}
          />
      </View> : null;

    const photoPreviewModal = isOpenedPreviewPhotoModal ?
      <View style={[Style.profilePhotoCanvasModal]}>
        <Image
          source={{ uri: photoPath }}
          style={Style.previewPhoto}
        />
        <TouchableIcon
          style={Style.okButtonModal}
          onPress={this.submitPhotoPath}
          source={okIcon}
        />
        <TouchableIcon
          style={Style.cancelButtonModal}
          onPress={this.closeModal}
          source={clearIcon}
        />
        <TouchableIcon
          style={Style.editPhotoButtonModal}
          onPress={() => {}}
          source={editIcon}
        />
        <TouchableIcon
          style={Style.takePhotoButtonModal}
          onPress={(this.goToTakePhoto)}
          source={cameraIcon}
        />
      </View> : null;

    const showProfilePhoto = profile.photoPath ?
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => this.setState({isOpenedPreviewPhotoModal: true})}
      >
        <Image
          source={{ uri: profile.photoPath }}
          style={Style.profilePhoto}
        />
      </TouchableHighlight>:
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => this.setState({isOpenedTakePhotoModal: true})}
      >
        <View style={Style.profilePhotoIconWrapper}>
          <Image
            style={Style.profilePhotoIcon}
            source={profileImage}
          />
        </View>
      </TouchableHighlight>;

    return (
      <View style={Style.profileScene}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={isOpenedEditUsernameModal ||
            isOpenedEditMobilePhoneModal ||
            isOpenedTakePhotoModal ||
            isOpenedPhotoCanvasModal ||
            isOpenedPreviewPhotoModal}
          onRequestClose={this.closeModal}
        >
          {editUsernameModal}
          {editMobilePhoneModal}
          {takePhotoModal}
          {photoCanvasModal}
          {photoPreviewModal}
        </Modal>
        <ScrollView>
          <View style={Style.profileContainer}>
            <View style={Style.profileWrapper}>
              {showProfilePhoto}
              <Text style={Style.profilePhotoName}>{profile.name}</Text>
            </View>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.setState({isOpenedEditUsernameModal: true})}
              style={Style.profileInformationCard}
            >
              <View style={Style.profileInformationContainer}>
                <View style={Style.profileInformationIconWrapper}>
                  <Image
                    style={Style.profileInformationIcon}
                    source={userIcon}
                  />
                </View>
                <View style={Style.profileInformationWrapper}>
                  <Text style={HelperStyle.boldText}>Username</Text>
                  <Text>{profile.username}</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.setState({isOpenedEditMobilePhoneModal: true})}
              style={Style.profileInformationCard}
            >
              <View style={Style.profileInformationContainer}>
                <View style={Style.profileInformationIconWrapper}>
                  <Image
                    style={Style.profileInformationIcon}
                    source={phoneIcon}
                  />
                </View>
                <View style={Style.profileInformationWrapper}>
                  <Text style={HelperStyle.boldText}>Mobile phone</Text>
                  <Text>{mobilePhoneText}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    )
  };
};