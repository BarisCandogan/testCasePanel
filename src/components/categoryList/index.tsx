import {FlatList} from 'react-native';
import {CategoryModel} from '../../api/models/category.model';
import CategoryItem from '../categoryItem';

const CategoryList = ({
  categories,
  onEdit,
  onDelete,
}: {
  categories: CategoryModel[];
  onEdit: (category: CategoryModel) => void;
  onDelete: (categoryId: number) => void;
}) => (
  <FlatList
    data={categories}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => (
      <CategoryItem categories={item} onEdit={onEdit} onDelete={onDelete} />
    )}
  />
);

export default CategoryList;
