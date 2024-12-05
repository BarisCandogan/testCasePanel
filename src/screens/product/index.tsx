import React, {useEffect, useState} from 'react';
import {SafeAreaView, ActivityIndicator, Alert} from 'react-native';
import {styles} from './style';
import {COLOR} from '../../constants/config';
import ModalBase from '../../components/modal';
import {NavigationProp} from '../../navigation/stack';
import ProductList from '../../components/productList';
import Header from '../../components/header';
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from '../../api/services/product.service';

interface Props {
  navigation: NavigationProp;
}

const Product = ({navigation}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState(getInitialFormState());
  const {data: products, isFetching, error} = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [createProduct] = useCreateProductMutation();

  function getInitialFormState() {
    return {
      id: 0,
      name: '',
      slug: '',
      sku: '',
      stockAmount: 0,
      price1: 0,
      currency: {id: 1},
      status: 1,
      pageTitle: '',
      metaDescription: '',
      canonicalUrl: '',
      createdAt: '',
    };
  }

  const onDeleteProduct = async (productId: number) => {
    try {
      await deleteProduct(productId);
      Alert.alert('Başarılı', 'Ürün başarıyla Silindi');
    } catch (error) {
      console.log(error);
      Alert.alert('Hata', 'Ürün silinirken hata oluştu');
    } finally {
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: field === 'id' ? Number(value) : value,
    }));
  };

  const addProduct = async () => {
    try {
      await createProduct(form).unwrap();
      Alert.alert('Başarılı', 'Ürün başarıyla eklendi');
    } finally {
      setForm(getInitialFormState());
      setModalVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        product
        navigation={navigation}
        setIsUpdateMode={() => {}}
        setModalVisible={() => setModalVisible(true)}
      />

      <ProductList products={products || []} onDelete={onDeleteProduct} />
      <ModalBase
        product
        addProduct={addProduct}
        handleInputChange={handleInputChange}
        form={form}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default Product;
