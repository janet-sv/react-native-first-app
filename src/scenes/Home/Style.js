import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  homeScene: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeBlocksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  homeBlock: {
    width: 130,
    height: 140,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    margin: 10,
  },

  homeBlockWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeBlockImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  }

});