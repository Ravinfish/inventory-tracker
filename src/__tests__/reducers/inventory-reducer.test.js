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

  it('should handle DECREASE_QUANTITY action', () => {
    const initialState = {
      masterInventoryList: [
        {
          name: 'Exsisting Item',
          price: '$29.99',
          pieces: '8 pieces',
          quantity: 3,
          id: 'existingItem',
        },
      ],
    };

    const action = decreaseQuantity('existingItem');
    const nextState = inventoryReducer(initialState, action);

    expect(nextState).toEqual({
      masterInventoryList: [
        {
          name: 'Exsisting Item',
          price: '$29.99',
          pieces: '8 pieces',
          quantity: 2,
          id: 'existingItem',
        },
      ],
    });
  });

  it('should handle adding mulitple items to inventory', () => {
    const initialState = {
      masterInventoryList: [],
    };

    const item1 = {
      name: 'Item 1',
      price: '$9.99',
      pieces: '5 pieces',
      quantity: 10,
      id: 'item1',
    };

    const item2 = {
      name: 'Item 2',
      price: '14.99',
      pieces: '8 pieces',
      quantity: 15,
      id: 'item2',
    };

    const action1 = addToInventory(item1);
    const stateAfterAddingItem1 = inventoryReducer(initialState, action1);

    const action2 = addToInventory(item2);
    const nextState = inventoryReducer(stateAfterAddingItem1, action2);

    expect(nextState).toEqual({
      masterInventoryList: [item1, item2],
    });
  });
});
