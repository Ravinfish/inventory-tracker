export const addToInventory = (item) => ({
  type: 'ADD_TO_INVENTORY',
  payload: item,
});

export const decreaseQuantity = (itemId) => ({
  type: 'DECREASE_QUANTITY',
  payload: { itemId },
});