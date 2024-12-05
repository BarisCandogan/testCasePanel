import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {CategoryModel} from '../../api/models/category.model';

const CategoryItem = ({
  categories,
  onEdit,
  onDelete,
}: {
  categories: CategoryModel;
  onEdit: (category: CategoryModel) => void;
  onDelete: (categoryId: number) => void;
}) => {
  return (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryName}>{categories.name}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => onEdit(categories)}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Image
            style={[styles.icon]}
            source={require('../../assets/images/edit.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDelete(categories.id)}
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

export default CategoryItem;
