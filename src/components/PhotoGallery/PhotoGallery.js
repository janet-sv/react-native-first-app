import React, { Component } from 'react';
import { View, ListView, Text, Modal, CameraRoll, Image, ScrollView, TouchableHighlight } from 'react-native';
import TouchableIcon from './../TouchableIcon/TouchableIcon';
import okIcon from './ok-icon.png';
import clearIcon from './clear-icon.png';
import Style from './Style';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class PhotoGallery extends Component {

  state = {
    galleryData: {},
    edges: [],
    endCursor: null,
    dataSource: ds,
    isOpenedPhotoCanvasModal: false,
    selectedPhoto: '',
  };

  componentDidMount() {
    this.fetch();
  };

  componentDidUpdate() {
    const {
      edges,
      galleryData,
    } = this.state;

    if (galleryData.page_info.end_cursor) {
      this.fetch();
    }
  };

  fetch() {
    const fetchParams = {
      first: 50,
      after: this.state.endCursor,
    };

    CameraRoll.getPhotos(fetchParams)
    .then((data) => {
      const newEdges = data.edges.slice();
      const edges = this.state.edges.concat(newEdges);
      const endCursor = data.page_info.end_cursor;
      this.setState({
        edges: edges,
        galleryData: data,
        endCursor: endCursor,
        dataSource: ds.cloneWithRows(edges),
      });
    },
    (e) => console.log('error'));
  };

  getFirstPhoto = () => {
    const {
      edges,
    } = this.state;

    if (edges.length) {
      return edges[0];
    }
    return null;
  };

  openModal = (uri) => {
    this.setState({
      selectedPhoto: uri,
      isOpenedPhotoCanvasModal: true,
    });
  };

  onClickOkButton = () => {
    const {
      selectedPhoto,
    } = this.state;

    const {
      onSelect,
    } = this.props;

    this.setState({isOpenedPhotoCanvasModal: false}, () => onSelect(selectedPhoto));
  };

  render() {
    const {
      dataSource,
      isOpenedPhotoCanvasModal,
      selectedPhoto,
    } = this.state;


    return (
      <View style={{flex: 1}}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={isOpenedPhotoCanvasModal}
          onRequestClose={() => this.setState({isOpenedPhotoCanvasModal: false})}
        >
          <View style={Style.photoCanvasModal}>
            <Image
              source={{uri: selectedPhoto}}
              style={Style.photoImageCanvasModal}
            />
            <TouchableIcon
              style={Style.okButtonModal}
              onPress={this.onClickOkButton}
              source={okIcon}
            />
            <TouchableIcon
              style={Style.cancelButtonModal}
              onPress={() => this.setState({isOpenedPhotoCanvasModal: false})}
              source={clearIcon}
            />
          </View>
        </Modal>
        <ListView
          dataSource={dataSource}
          contentContainerStyle={Style.photoGallery}
          renderRow={
            (rowData) =>
            <View style={Style.photoWrapper}>
              <TouchableHighlight
                onPress={() => this.openModal(rowData.node.image.uri)}
                underlayColor="transparent"
              >
                <Image
                  source={{uri: rowData.node.image.uri}}
                  style={Style.photoImage}
                />
              </TouchableHighlight>
            </View>
          }
        />
      </View>
    )
  };
};