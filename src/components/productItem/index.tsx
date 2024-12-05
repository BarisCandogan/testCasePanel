import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {ProductModel} from '../../api/models/product.model';

const ProductItem = ({
  products,
  onDelete,
}: {
  products: ProductModel;
  onDelete: (productId: number) => void;
}) => {
  return (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryName}>{products.name}</Text>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => onDelete(products.id)}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Image
            style={[styles.icon, {tintColor: 'red'}]}
            source={require('../../assets/images/trash.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
