import React, { Component } from 'react';
import { View, Text, BackAndroid, CameraRoll, Image, ScrollView } from 'react-native';
import Style from './Style';

export default class PhotoGallery extends Component {
  state = {
    galleryData: {},
    edges: [],
  };

  componentWillMount() {
    const fetchParams = {
      first: 20,
      after: null,
    };

    CameraRoll.getPhotos(fetchParams)
      .then((data) => {
        const edges = data.edges.slice();
        this.setState({
          galleryData: data,
          edges: edges,
        });
        this.completeEdges();
        console.log(this.state.galleryData);
        console.log(this.state.edges);
      },
      (e) => console.log('error'));
  };

  completeEdges = () => {
    if (!galleryData.page_info.has_next_page) {
      return;
    }

  };

  render() {
    const size = this.state.edges.length;
    const element = size ? this.state.edges[size-1].node.image.uri : "It's empty";
    return (
      <ScrollView>
        <View style={Style.photosContainer}>
          <Text>{JSON.stringify(this.state.galleryData)}</Text>
          <Text>{size}</Text>
          <Text>{element}</Text>
        </View>
      </ScrollView>
    )
  };
};