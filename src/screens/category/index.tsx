import React, {useEffect, useState} from 'react';
import {SafeAreaView, ActivityIndicator, Alert} from 'react-native';
import {styles} from './style';
import {COLOR} from '../../constants/config';
import ModalBase from '../../components/modal';
import {CategoryModel} from '../../api/models/category.model';
import {NavigationProp} from '../../navigation/stack';
import CategoryList from '../../components/categoryList';
import Header from '../../components/header';
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from '../../api/services/category.service';

interface Props {
  navigation: NavigationProp;
}

const Category = ({navigation}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updateCategoryId, setUpdateCategoryId] = useState<number | null>(null);
  const {data: categories, isFetching, error} = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  const getInitialFormState = () => ({
    name: '',
    metaDescription: '',
    metaKeywords: '',
    status: 1,
    createdAt: '',
  });

  const [form, setForm] = useState(getInitialFormState());

  const handleDelete = async (categoryId: number) => {
    try {
      await deleteCategory(categoryId).unwrap();
      Alert.alert('Başarılı', 'Kategori başarıyla silindi!');
    } catch (error) {
      Alert.alert('Hata', 'Kategori silinirken bir hata oluştu.');
    } finally {
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: ['sortOrder', 'status'].includes(field) ? Number(value) : value,
    }));
  };

  const saveCategory = async () => {
    try {
      if (isUpdateMode) {
        await updateCategory({categoryId: updateCategoryId, form}).unwrap();
        Alert.alert('Başarılı', 'Kategori başarıyla güncellendi!');
      } else {
        await createCategory(form).unwrap();
        Alert.alert('Başarılı', 'Kategori başarıyla oluşturuldu!');
      }
    } catch (error) {
      Alert.alert('Hata', 'İşlem sırasında bir hata oluştu.');
      console.error('Hata:', error);
    } finally {
    }
  };

  const handleEditCategory = (category: CategoryModel) => {
    setIsUpdateMode(true);
    setUpdateCategoryId(category.id);
    setForm({
      name: category.name,
      metaDescription: category.metaDescription,
      metaKeywords: category.metaKeywords,
      status: category.status,
      createdAt: category.createdAt,
    });
    setModalVisible(true);
  };

  const closeModal = () => {
    setIsUpdateMode(false);
    setUpdateCategoryId(null);
    setForm(getInitialFormState());
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        setIsUpdateMode={() => setIsUpdateMode(false)}
        setModalVisible={() => setModalVisible(true)}
      />
      <CategoryList
        categories={categories || []}
        onEdit={handleEditCategory}
        onDelete={handleDelete}
      />
      <ModalBase
        form={form}
        visible={modalVisible}
        isUpdateMode={isUpdateMode}
        handleInputChange={handleInputChange}
        onClose={closeModal}
        onSave={saveCategory}
        addProduct={function (): void {
          console.log('fonksiyon mevcut değil');
        }}
      />
    </SafeAreaView>
  );
};

export default Category;
