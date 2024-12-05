import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stack';
import {Provider} from 'react-redux';
import {store, useTypedSelector} from './src/store/store';
import Loading from './src/components/loading';

const GlobalLoader = () => {
  const isLoading = useTypedSelector(
    state =>
      state.apiService.queries &&
      Object.values(state.apiService.queries).some(
        query => query?.status === 'pending',
      ),
  );

  return isLoading ? <Loading /> : null;
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GlobalLoader />
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
