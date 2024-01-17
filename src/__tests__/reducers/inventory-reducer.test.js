import inventoryReducer from "../../reducers/inventory-reducer";
import { addToInventory } from "../../reducers/inventoryActions";

describe('inventoryReducer', () => {
  it('should handle ADD_TO_INVENTORY action', () => {
    const initialState = {
      masterInventoryList: [],
    };

    const itemToAdd = {
      name: 'Test Item',
      price: '19.99',
      pieces: '10 pieces',
      quantity: 5,
      id: 'abc123',
    };

    const action = addToInventory(itemToAdd);
    const nextState = inventoryReducer(initialState, action);

    expect(nextState).toEqual({
      masterInventoryList: [itemToAdd],
    });
  });
});
