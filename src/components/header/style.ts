import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/config';

export const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: COLOR,
    borderColor: '#grey',
    borderRadius: 5,
    borderWidth: 0.5,
    alignSelf: 'flex-start',
    padding: 10,
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
