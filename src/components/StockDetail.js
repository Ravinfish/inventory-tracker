import React from "react";
import PropTypes from 'prop-types';

function StockDetail(props) {
  const { onItemEdit, selectedDetails } = props;

  function handleStockDetailSubmission(e) {
    e.preventDefault();
    const itemId = e.target.id.value;
    const { name, price, pieces, quantity } = props.onItemEdit;

    props.onItemEdit({
      name: e.target.name.value || name,
      price: e.target.price.value || price,
      pieces: parseInt(e.target.pieces.value) || pieces,
      quantity: parseInt(e.target.quantity.value) || quantity,
      // imgSrc: e.target.imgSrc.value,
      id: itemId
    });
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
          {/* <label>Image: </label>
          <input
            type="text"
            name="imgSrc"
            defaultValue={selectedDetails.imgSrc} /> */}
          <br></br>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </React.Fragment>
  );
}

StockDetail.propTypes = {
  onItemEdit: PropTypes.func,
};

export default StockDetail;
