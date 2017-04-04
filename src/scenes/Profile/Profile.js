import React, { Component } from 'react';
import { View, TextInput, Button, Text, Image, ScrollView, TouchableHighlight, Modal, CameraRoll } from 'react-native';
import Style from './Style';
import HelperStyle from './../../styles/HelperStyle';
import profileImage from './profile-image.png';
import PhotoCanvas from './../../components/PhotoCanvas/PhotoCanvas';
import TouchableIcon from './../../components/TouchableIcon/TouchableIcon';
import PhotoGallery from './../../components/PhotoGallery/PhotoGallery';
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
    isOpenedGalleryPhotoModal: false,
    username: this.props.profile.username,
    mobilePhone: this.props.profile.mobilePhone,
    photoPath: this.props.profile.photoPath,
    firstPhotoPath: '',
  };

  componentWillMount() {
    this.fetchFirstPhoto();
  };

  fetchFirstPhoto = () => {
    const fetchParams = {
      first: 1,
    };

    CameraRoll.getPhotos(fetchParams)
    .then((data) => {
      this.setState({
        firstPhotoPath: data.edges[0].node.image.uri,
      });
    },
    (e) => console.log('error'));
  };

  navigate = (title) => {
    const {
      navigator,
      routes,
    } = this.props;

    const route = findRoute(routes, title);
    navigator.push(route);
  };

  goToPhotoCanvas = () => {
    const {
      profile,
    } = this.props;

    this.setState({
      isOpenedPhotoCanvasModal:true,
      photoPath: profile.photoPath,
    }, () => {
      this.closePreviewPhotoModal();
      this.closeTakePhotoModal();
    });
  };

  goToGallery = () => {
    this.setState({
      isOpenedGalleryPhotoModal: true,
    }, () => {
      this.closePreviewPhotoModal();
      this.closeTakePhotoModal();
    });
  };

  closeEditUsernameModal = () => {
    const {
      profile,
    } = this.props;

    this.setState({
      isOpenedEditUsernameModal: false,
      username: profile.username,
    });
  };

  closeEditMobilePhoneModal = () => {
    const {
      profile,
    } = this.props;

    this.setState({
      isOpenedEditMobilePhoneModal: false,
      mobilePhone: profile.mobilePhone,
    });
  };

  closeTakePhotoModal = () => {
    this.setState({
      isOpenedTakePhotoModal: false,
    });
  };

  closePhotoCanvasModal = () => {
    this.setState({
      isOpenedPhotoCanvasModal: false,
    });
  };

  closePreviewPhotoModal = () => {
    const {
      profile,
    } = this.props;

    this.setState({
      isOpenedPreviewPhotoModal: false,
      photoPath: profile.photoPath,
    });
  };

  closeGalleryPhotoModal = () => {
    this.setState({
      isOpenedGalleryPhotoModal: false,
    });
  };

  savePhotoPath = (path) => {
    this.setState({
      firstPhotoPath: path,
      photoPath: path,
      isOpenedPreviewPhotoModal: true,
    }, this.closePhotoCanvasModal);
  };

  submitUsername = (e) => {
    const {
      parent,
    } = this.props;

    const {
      username,
    } = this.state;

    parent.editUsername(username);
    this.closeEditUsernameModal();
  };

  submitMobilePhone = (e) => {
    const {
      parent,
    } = this.props;

    const {
      mobilePhone,
    } = this.state;

    parent.editMobilePhone(mobilePhone);
    this.closeEditMobilePhoneModal();
  };

  getPhotoFromGallery = (photoPath) => {
    this.setState(
      {photoPath: photoPath},
      () => {
        this.submitPhotoPath();
        this.closeGalleryPhotoModal();
      });
  };

  submitPhotoPath = (e) => {
    const {
      parent,
    } = this.props;

    const {
      photoPath,
    } = this.state;

    parent.editPhoto(photoPath);
    this.closePreviewPhotoModal();
    this.closePhotoCanvasModal();
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
      isOpenedGalleryPhotoModal,
      username,
      mobilePhone,
      photoPath,
      firstPhotoPath,
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
            onPress={this.closeEditUsernameModal}
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
            onPress={this.closeEditMobilePhoneModal}
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
            onPress={this.goToPhotoCanvas}
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
            onPress={this.goToGallery}
          >
            <View style={Style.profileModalPhotoWrapper}>
              <Image
                style={Style.profileModalPhoto}
                source={galleryIcon}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.closeTakePhotoModal}
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
            onClose = {this.closePhotoCanvasModal}
          />
      </View> : null;

    const photoPreviewModal = isOpenedPreviewPhotoModal ?
      <View style={Style.profilePhotoCanvasModal}>
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
          onPress={this.closePreviewPhotoModal}
          source={clearIcon}
        />
        <TouchableHighlight
          onPress={this.goToGallery}
          style={[Style.editPhotoButtonModal]}
        >
          <View style={{borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 55}}>
            <Image
              style={{height: 55, width: 55, borderRadius: 55}}
              source={{uri: firstPhotoPath}}
            />
          </View>
        </TouchableHighlight>
        <TouchableIcon
          style={Style.takePhotoButtonModal}
          onPress={(this.goToPhotoCanvas)}
          source={cameraIcon}
        />
      </View> : null;

    const photoGalleryModal = isOpenedGalleryPhotoModal ?
      <View style={Style.profilePhotoGalleryModal}>
        <View style={{backgroundColor: 'teal', height: 60, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#FFFFFF', fontWeight: '600'}}>Choose a photo from your gallery</Text>
          <TouchableIcon
            onPress={this.closeGalleryPhotoModal}
            source={clearIcon}
          />
        </View>
        <PhotoGallery onSelect={this.getPhotoFromGallery}/>
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
          visible={isOpenedGalleryPhotoModal}
          onRequestClose={this.closeGalleryPhotoModal}
        >
          {photoGalleryModal}
        </Modal>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={isOpenedEditUsernameModal}
          onRequestClose={this.closeEditUsernameModal}
        >
          {editUsernameModal}
        </Modal>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={isOpenedEditMobilePhoneModal}
          onRequestClose={this.closeEditMobilePhoneModal}
        >
          {editMobilePhoneModal}
        </Modal>
        <Modal
          animationType={"none"}
          transparent={true}
          visible={isOpenedTakePhotoModal}
          onRequestClose={this.closeTakePhotoModal}
        >
          {takePhotoModal}
        </Modal>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={isOpenedPhotoCanvasModal}
          onRequestClose={this.closePhotoCanvasModal}
        >
          {photoCanvasModal}
        </Modal>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={isOpenedPreviewPhotoModal}
          onRequestClose={this.closePreviewPhotoModal}
        >
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