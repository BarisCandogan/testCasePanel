import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp} from '../../navigation/stack';
import {COLOR} from '../../constants/config';
import {styles} from './style';

interface Props {
  navigation: NavigationProp;
  setIsUpdateMode: (value: boolean) => void;
  setModalVisible: (value: boolean) => void;
  product?: boolean;
}

const Header = ({
  navigation,
  setModalVisible,
  setIsUpdateMode,
  product,
}: Props) => {
  return (
    <>
      <Text style={styles.title}>Yönetici Paneli</Text>
      <View style={styles.titleContainer}>
        <Text style={[styles.categoryTitle, {color: COLOR}]}>
          {product ? 'Ürünler' : 'Kategoriler'}
        </Text>
        <Text
          onPress={() =>
            product ? navigation.goBack() : navigation.navigate('Product')
          }
          style={[styles.categoryTitle]}>
          {product ? ' < Kategoriler' : 'Ürünler >'}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => (
          product ? setModalVisible(true) : setModalVisible(true),
          setIsUpdateMode(false)
        )}
        style={styles.categoryContainer}>
        <Text style={{color: 'white', fontWeight: '700'}}>
          {' '}
          {product ? '+ Ürün Ekle' : '+ Kategori Ekle'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Header;
