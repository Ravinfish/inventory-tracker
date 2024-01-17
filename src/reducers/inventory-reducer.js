const initialState = {
  masterInventoryList: [],
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_INVENTORY':
      return {
        ...state,
        masterInventoryList: [...state.masterInventoryList, action.payload],
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        masterInventoryList: state.masterInventoryList.map(item => {
          if (item.id === action.payload.itemId && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };

      default:
        return state;
  }
};

export default inventoryReducer;