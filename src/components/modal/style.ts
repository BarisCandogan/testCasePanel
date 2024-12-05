import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/config';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    flex: 0.95,
    alignItems: 'center',
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 30,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
  },
  input: {
    width: '98%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    fontSize: 18,
    marginBottom: 16,
    borderRadius: 4,
  },

  buttonContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  inputError: {
    borderColor: 'red',
  },
  button: {
    marginTop: 50,
    backgroundColor: COLOR,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  closeButton: {
    width: '10%',
    backgroundColor: COLOR,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
