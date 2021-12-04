import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import { QueryClientProvider, QueryClient } from 'react-query';
import AppNavigator from './src/navigation/AppNavigator';
import setupAxios from './setupAxios';
import store from './src/store';
import { Text } from 'react-native';

setupAxios(store);


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    }
  }
});

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <MenuProvider>
            <AppNavigator />
          </MenuProvider>
        </Suspense>
      </QueryClientProvider>
    </Provider>
  );
}