import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {styles} from './style';
import {category} from '../../api/models/category.model';
import {product} from '../../api/models/product.model';

interface ProductModalProps {
  product?: boolean;
  addProduct: () => void;
  visible: boolean;
  onClose: () => void;
  form?: category | product | undefined;
  isUpdateMode?: boolean;
  handleInputChange: (field: string, value: string) => void;
  addCategory?: () => void;
  onSave?: () => void;
}

const ModalBase = ({
  visible,
  onClose,
  form,
  handleInputChange,
  isUpdateMode,
  onSave = () => {},
  addProduct,
  product,
}: ProductModalProps) => {
  const validateForm = () => {
    if (product && form && 'id' in form) {
      const newErrors = {
        name: !form?.name,
        sku: !form?.sku,
        metaDescription: !form?.metaDescription,
      };
      return !newErrors.name && !newErrors.sku && !newErrors.metaDescription;
    } else {
      const newErrors = {
        name: !form?.name,
        metaDescription: !form?.metaDescription,
        createdAt: !form?.createdAt,
      };

      return (
        !newErrors.name && !newErrors.metaDescription && !newErrors.createdAt
      );
    }
  };

  const handleAddButton = () => {
    if (product) {
      if (!validateForm()) {
        Alert.alert('Hata', 'Lütfen zorunlu alanları doldurun.');
        return;
      } else {
        addProduct();
      }
    } else if (!validateForm()) {
      Alert.alert('Hata', 'Lütfen zorunlu alanları doldurun.');
      return;
    } else {
      onClose();
      onSave();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                onClose();
              }}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalText}>
            {product ? 'Ürün Ekle' : 'Kategori Ekle'}
          </Text>
          {product ? (
            <>
              <TextInput
                placeholderTextColor={'gray'}
                style={[styles.input]}
                placeholder="Ürün Adı*"
                onChangeText={value => handleInputChange('name', value)}
              />
              <TextInput
                placeholderTextColor={'gray'}
                style={[styles.input]}
                placeholder="Ürün Kodu*"
                onChangeText={value => handleInputChange('sku', value)}
              />
              <TextInput
                placeholderTextColor={'gray'}
                style={[styles.input]}
                placeholder="Ürün Açıklaması*"
                onChangeText={value =>
                  handleInputChange('metaDescription', value)
                }
              />
            </>
          ) : (
            <>
              <TextInput
                placeholderTextColor={'gray'}
                style={[styles.input]}
                placeholder="Kategori Adı*"
                onChangeText={value => handleInputChange('name', value)}
              />
              <TextInput
                placeholderTextColor={'gray'}
                style={[styles.input]}
                placeholder="Açıklama*"
                onChangeText={value =>
                  handleInputChange('metaDescription', value)
                }
              />
              <TextInput
                placeholderTextColor={'gray'}
                style={styles.input}
                placeholder="Anahtar Kelimeler (İsteğe Bağlı)"
                onChangeText={value => handleInputChange('metaKeywords', value)}
              />
              <TextInput
                placeholderTextColor={'gray'}
                style={[styles.input]}
                placeholder="Yaratılma Tarihi*"
                onChangeText={value => handleInputChange('createdAt', value)}
              />
            </>
          )}
          <TouchableOpacity style={styles.button} onPress={handleAddButton}>
            <Text style={styles.text}>
              {isUpdateMode ? 'Güncelle' : 'Ekle'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalBase;
