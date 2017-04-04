import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

var widthWindow = Dimensions.get('window').width;

export default StyleSheet.create ({
  photoGallery: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  photoWrapper: {
    margin: 2,
    height: (widthWindow - 44)/ 2,
    width: (widthWindow - 44)/ 2,
    alignItems: 'stretch',
  },

  photoImage: {
    height: (widthWindow - 44)/ 2,
  },

  photoCanvasModal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  photoImageCanvasModal: {
    flex: 1,
  },

  okButtonModal: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  cancelButtonModal: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
