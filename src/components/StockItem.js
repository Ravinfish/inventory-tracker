import React, { useState } from "react";
import PropTypes from "prop-types";

function StockItems({ name, price, imgSrc, quantity, id, addToBag, handleUpdate }) {
  const [quantityRemaining, setQuantityRemaining] = useState(quantity);
  
  const handleBagClick = () => {
    console.log("addToBag clicked with id:", id)
    if (quantityRemaining > 0) {
      setQuantityRemaining((prevQuantity) => prevQuantity - 1);
      addToBag(id);
    } else {
        // Handle case when quantityRemaining is 0
    }
  };

  const handleUpdateClick = () => {
    handleUpdate(name, price, id);
  };

  return (
    <div id="stockItem">
      <img src={imgSrc} alt={name} />
      <p>{name} - {price}</p>
      <p>Quantity: {quantityRemaining}</p>
      <button onClick={handleBagClick}>Add to Bag!</button>
      <button onClick={handleUpdateClick}>Update/View Bag Details</button>
      <hr />
    </div>
  );
}

StockItems.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addToBag: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default StockItems;