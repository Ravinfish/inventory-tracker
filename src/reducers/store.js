 import { createStore } from 'redux';
 import inventoryReducer from './inventory-reducer';

 const store = createStore(inventoryReducer);

 export default store;