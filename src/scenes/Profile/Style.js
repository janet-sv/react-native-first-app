import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  profileScene: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileContainer: {
    padding: 20,
  },

  profileWrapper: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    elevation: 3,
    marginBottom: 20,
    padding: 20,
    alignItems: 'center',
  },

  profilePhotoIconWrapper: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: '#EEEEEE',
  },

  profilePhotoIcon: {
    width: 100,
    height: 100,
  },

  profilePhoto: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },

  profilePhotoName:{
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
  },

  profileInformationCard: {
    elevation: 3,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },

  profileInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },

  profileInformationIconWrapper: {
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  profileInformationIcon: {
    width: 30,
    height: 30,
  },

  profileInformationWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  profileModal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 60,
  },

  profileModalWrapper: {
    flex: 1,
    alignItems: 'center',
  },

  profileModalImageWrapper: {
    width: 230,
    height: 180,
  },

  profileModalImage: {
    height: '100%',
    width: '100%',
  },

  profileModalTitle: {
    marginTop: 20,
    fontWeight: '800',
    fontSize: 18,
  },

  profileModalTextInput: {
    width: '100%',
    marginVertical: 20,
  },

  profileModalCancelButton: {
    marginVertical: 20,
  },

  profileModalPhotoWrapper: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: '#EEEEEE',
    marginVertical: 30,
  },

  profileModalPhoto: {
    width: 100,
    height: 100,
  },

  profilePhotoCanvasModal: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
  },

  previewPhoto: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  takePhotoButtonModal: {
    position: 'absolute',
    top: 20,
    left: 20,
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

  editPhotoButtonModal: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});