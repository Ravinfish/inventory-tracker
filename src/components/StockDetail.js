import React from "react";
import PropTypes from 'prop-types';

function StockDetail(props) {
  const { selectedItemId, selectedDetails } = props;
  function handleStockDetailSubmission(e) {
    e.preventDefault();
    const itemId = e.target.id.value;
    props.onItemEdit({
      name: e.target.name.value,
      price: e.target.price.value,
      pieces: e.target.pieces.value,
      quantity: parseInt(e.target.quantity.value),
      imgSrc: e.target.imgSrc.value,
      id: itemId
    });
  }

  function handleDeletedItem() {
    props.onDelete(selectedItemId)
  }

  return (
    <React.Fragment>
      <div className="input-form">
        <h2>Currently Viewing / Editing {selectedDetails.name}</h2>
        <form onSubmit={handleStockDetailSubmission}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            defaultValue={selectedDetails.name} />
          <label>Price: </label>
          <input
            type="text"
            name="price"
            defaultValue={selectedDetails.price} />
          <label>Pieces: </label>
          <input
            type="text"
            name="pieces"
            defaultValue={selectedDetails.pieces} />
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            defaultValue={selectedDetails.quantity} />
          <label>Image: </label>
          <input
            type="text"
            name="imgSrc"
            defaultValue={selectedDetails.imgSrc} />
          <br></br>
          <button type="submit">Save Changes</button>
        </form>
        <button onClick={handleDeletedItem}>Delete Item</button>
      </div>
    </React.Fragment>
  );
}

StockDetail.propTypes = {
  selectedItemId: PropTypes.string,
  selectedDetails: PropTypes.object,
  onItemEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default StockDetail;
