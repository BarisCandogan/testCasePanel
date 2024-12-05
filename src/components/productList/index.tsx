import {FlatList} from 'react-native';
import {ProductModel} from '../../api/models/product.model';
import ProductItem from '../productItem';

const ProductList = ({
  products,
  onDelete,
}: {
  products: ProductModel[];
  onDelete: (productId: number) => void;
}) => (
  <FlatList
    data={products}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => <ProductItem onDelete={onDelete} products={item} />}
  />
);

export default ProductList;
