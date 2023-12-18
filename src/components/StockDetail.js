import React from "react";
import PropTypes from 'prop-types';

function StockDetail(props) {
  const { onItemEdit, onDelete } = props;
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
    props.onDelete(props.onItemEdit.id)
  }

  return (
    <React.Fragment>
      <div className="input-form">
        <h2>Currently Viewing / Editing {onItemEdit.name}</h2>
        <form onSubmit={handleStockDetailSubmission}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            defaultValue={onItemEdit.name} />
          <label>Price: </label>
          <input
            type="text"
            name="price"
            defaultValue={onItemEdit.price} />
          <label>Pieces: </label>
          <input
            type="text"
            name="pieces"
            defaultValue={onItemEdit.pieces} />
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            defaultValue={onItemEdit.quantity} />
          <label>Image: </label>
          <input
            type="text"
            name="imgSrc"
            defaultValue={onItemEdit.imgSrc} />
          <br></br>
          <button type="submit">Save Changes</button>
        </form>
        <button onClick={handleDeletedItem}>Delete Item</button>
      </div>
    </React.Fragment>
  );
}

StockDetail.propTypes = {
  onItemEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default StockDetail;
