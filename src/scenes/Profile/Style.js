import { StyleSheet } from 'react-native';

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

  profilePhotoWrapper: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: '#EEEEEE',
  },

  profilePhoto: {
    width: 100,
    height: 100,
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
});