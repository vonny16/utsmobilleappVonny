import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Route from './routes';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Route />
    </NavigationContainer>
    </Provider>
  )
}
export default App


