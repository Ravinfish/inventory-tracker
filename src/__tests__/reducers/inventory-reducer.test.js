import inventoryReducer from '../reducers/inventory-reducer.js';

describe('inventoryReducer', () => {
  it('should handle ADD_TO_INVENTORY action', () => {
    const initialState = {
      masterInventoryList: [],
    };

    const action = {
      type: 'ADD_TO_INVENTORY',
      payload: {
        id: '123',
        name: 'Test Item',
        price: '19.99',
        pieces: '10 pieces',
        quantity: 5,
      },
    };

    const nextState = inventoryReducer(initialState, action);

    expect(nextState.masterInventoryList).toHaveLength(1);
  })
})