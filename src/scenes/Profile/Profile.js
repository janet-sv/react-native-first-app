import React, { Component } from 'react';
import { View, Text, BackAndroid, Image, ScrollView, TouchableHighlight } from 'react-native';
import Style from './Style';
import HelperStyle from './../../styles/HelperStyle';
import profileImage from './profile-image.png';
import TouchableIcon from './../../components/TouchableIcon/TouchableIcon';
import userIcon from './user-icon.png';
import phoneIcon from './phone-icon.png';

export default class Profile extends Component {
  state = {
    isOpenedModal: false,
  };

  render() {
    const {
      title,
      profile,
    } = this.props;

    const mobilePhone = profile.mobilePhone ? profile.mobilePhone : '---';

    return (
      <View style={Style.profileScene}>
        <ScrollView>
          <View style={Style.profileContainer}>
            <View style={Style.profileWrapper}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => {}}
              >
                <View style={Style.profilePhotoWrapper}>
                  <Image
                    style={Style.profilePhoto}
                    source={profileImage}
                  />
                </View>
              </TouchableHighlight>
              <Text style={Style.profilePhotoName}>{profile.name}</Text>
            </View>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {}}
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
              onPress={() => {}}
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
                  <Text>{mobilePhone}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    )
  };
};