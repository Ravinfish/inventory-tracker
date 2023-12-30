import React, { useState } from "react";
import PropTypes from "prop-types";

function StockItems({ name, price, pieces, quantity, id, addToBag, handleUpdate }) {
  const [quantityRemaining, setQuantityRemaining] = useState(parseInt(quantity, 10));

  const handleBagClick = () => {
    if (quantityRemaining > 0) {
      setQuantityRemaining(prevQuantity => prevQuantity - 1);
      addToBag(id);
    } else {
      // Handle case when quantityRemaining is 0
    }
  };

  const handleUpdateClick = () => {
    handleUpdate(id);
  };

  return (
    <div id="stockItem">
      {/* <img src={imgSrc} alt={name} /> */}
      <p>{name} - ${price}</p>
      <p>{pieces} pieces</p>
      {quantityRemaining > 0 ? (
        <p>Quantity: {quantityRemaining}</p>
      ) : (
        <p style={{ color: "red" }}>Out of Stock</p>
      )}
      <button onClick={handleBagClick}>Add to Bag!</button>
      <button onClick={handleUpdateClick}>Edit/Update Item</button>
      <hr />
    </div>
  );
}

StockItems.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pieces: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  addToBag: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default StockItems;