import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  categoryItem: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'grey',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
  },
  icon: {
    marginHorizontal: 10,

    width: 25,
    height: 25,
  },
  categoryName: {
    fontSize: 18,
    color: '#333',
  },
});
