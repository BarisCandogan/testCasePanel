import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'apiService',
  keepUnusedDataFor: 300,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://testcase.myideasoft.com/admin-api',
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `Bearer AX5FTZ7UBAABUDT6XYYPW7LX`);
      return headers;
    },
  }),
  tagTypes: ['Category', 'Product'],
  endpoints: () => ({}),
});
