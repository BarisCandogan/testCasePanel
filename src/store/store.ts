import {configureStore} from '@reduxjs/toolkit';
import {apiService} from '../api/request';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiService.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
