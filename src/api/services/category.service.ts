import {EndpointBuilder} from '@reduxjs/toolkit/query';
import {CategoryModel, category} from '../models/category.model';
import {product} from '../models/product.model';
import {apiService} from '../request';

export const categoryEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  getCategories: builder.query<CategoryModel[], void>({
    query: () => '/categories',
    providesTags: ['Category'],
  }),

  deleteCategory: builder.mutation({
    query: (categoryId: number) => ({
      url: `/categories/${categoryId}`,
      method: 'DELETE',
    }),
    invalidatesTags: ['Category'],
  }),

  createCategory: builder.mutation({
    query: (form: category | product | undefined) => ({
      url: '/categories',
      method: 'POST',
      body: form,
    }),
    invalidatesTags: ['Category'],
  }),

  updateCategory: builder.mutation({
    query: ({categoryId, form}: any) => ({
      url: `/categories/${categoryId}`,
      method: 'PUT',
      body: form,
    }),
    invalidatesTags: ['Category'],
  }),
});

const extendedApi = apiService.injectEndpoints({
  endpoints: categoryEndpoints,
});

export const {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} = extendedApi;
