import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLOR} from '../../constants/config';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  },
});

export default Loading;
