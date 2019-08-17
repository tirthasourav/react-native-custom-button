import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  textField: {
    height: 25,
    alignSelf: 'stretch',
    marginTop: 15,
    borderBottomWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
  inputLabelView: {
    position: 'relative',
    top: 20,
  },
  inactiveInput: {
    fontSize: 16,
    color: '#858585'
  },
  activeInput: {
    fontSize: 10,
    color: '#000000'
  },
  buttonStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

});
