import {EndpointBuilder} from '@reduxjs/toolkit/query';
import {ProductModel} from '../models/product.model';
import {apiService} from '../request';

export const productEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  getProducts: builder.query<ProductModel[], void>({
    query: () => '/products',
    providesTags: ['Product'],
  }),

  deleteProduct: builder.mutation({
    query: productId => ({
      url: `/products/${productId}`,
      method: 'DELETE',
    }),
    invalidatesTags: ['Product'],
  }),

  createProduct: builder.mutation({
    query: form => ({
      url: '/products',
      method: 'POST',
      body: form,
    }),
    invalidatesTags: ['Product'],
  }),
});

const extendedApi = apiService.injectEndpoints({
  endpoints: productEndpoints,
});

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
} = extendedApi;
