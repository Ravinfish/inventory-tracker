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
      
    </div>
  )
}