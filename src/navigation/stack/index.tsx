import React from 'react';
import Category from '../../screens/category';
import Product from '../../screens/product';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

type RootStackParamList = {
  Category: undefined;
  Product: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StackNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Category"
        component={Category}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Product"
        component={Product}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
