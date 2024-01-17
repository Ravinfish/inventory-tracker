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

      default:
        return state;
  }
};

export default inventoryReducer;