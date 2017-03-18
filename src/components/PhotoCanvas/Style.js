import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
   container: {
    flex: 1,
    flexDirection: 'row',
  },

  close: {
    position: 'absolute',
    top: 25,
    left: 20,
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  capture: {
    flex: 0,
    backgroundColor: 'teal',
    borderRadius: 100,
    padding: 15,
    margin: 40,
  },

  changeType: {
    position: 'absolute',
    top: 25,
    right: 15,
  },
});
