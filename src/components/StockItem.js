import React, { useState } from "react";
import PropTypes from "prop-types";

function StockItems({ name, price, imgSrc, pieces, quantity, id, addToBag }) {
  const [quantityRemaining, setQuantity] = useState(quantity);

  const handleBagClick = () => {
    if (quantityRemaining > 0) {
      setQuantity(s => s - 1);
      addToBag(name, price, id);
    } else {
    }
  };

  const handleUpdateClick = () => {
    handleUpdateClick(id);
  };

  return (
    <div id="stockItem">
      <img src={imgSrc} alt={name} />
      <p>{name} - {price}</p>
      <p>Quantity: {quantityRemaining}</p>
      <button onClick={handleBagClick}>Add to Bag!</button>
      <button onClick={handleUpdateClick}>Update Bag</button>
      <hr />
    </div>
  );
}

StockItems.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StockItems;