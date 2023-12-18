import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewStockDetail(props) {
  function handleNewStockSubmission(e) {
    e.preventDefault();
    const itemId = e.target.id.value;
    props.onNewItemCreation({
      name: e.target.name.value,
      price: e.target.price.value,
      pieces: e.target.pieces.value,
      quantity: parseInt(e.target.quantity.value),
      imgSrc: e.target.imgSrc.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <div className="input-form">
        <h2>Add New Item</h2>
        <form onSubmit={handleNewStockSubmission}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Item Name" />
          <label>Price: </label>
          <input
            type="text"
            name="price"
            placeholder="Price" />
          <label>Pieces: </label>
          <input
            type="text"
            name="pieces"
            placeholder="Pieces" />
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            placeholder="1" />
          <label>Image: </label>
          <input
            type="text"
            name="imgSrc"
            placeholder="Image Link" />
          <br></br>
          <button type="submit">Add to Inventory</button>
        </form>
      </div>
    </React.Fragment>
  );
}
  
  NewStockDetail.propTypes = {
  
  };

  export default NewStockDetail;