import React from 'react';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import InventoryControl from './InventoryControl';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <InventoryControl />
      </div>
    </Provider>
  );
}


export default App;
