import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { render } from "@testing-library/react";

class NewItemDetail extends React.Component {

  constructor(props) {
    super(props);

    const selectedItem = this.props.itemsInStock.find(item => item.id === this.props.selectedItemId);

    this.state = {
      name: selectedItem ? selectedItem.name : "",
      price: selectedItem ? selectedItem.price : "",
      quantity: selectedItem ? selectedItem.quantity : "",
      // imgSrc: selectedItem ? selectedItem.imgSrc : "",
    };
  }

  handleNewItemSubmission = (e) => {
    e.preventDefault();
 
    const itemId = this.props.selecteditemId || v4();

    const updatedItem = {
      id: itemId,
      name: this.state.name !== "" ? this.state.name : this.selectedItem.name,
      price: this.state.price !== "" ? this.state.price : this.selectedItem.price,
      quantity: this.state.quantity !== "" ? this.state.quantity : this.selectedItem.quantity,
      // imgSrc: this.state.imgSrc !== "" ? this.state.imgSrc : this.selectedItem.imgSrc,
    };

    this.props.onNewItemCreation({
      ...updatedItem,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-form">
          <h2>Add New Item</h2>
          <form onSubmit={this.handleNewItemSubmission}>
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
            <label>Quantity: </label>
            <input
              type="number"
              name="quantity"
              placeholder="1" />
            {/* <label>Image: </label>
            <input
              type="text"
              name="imgSrc"
              placeholder="Image Link" /> */}
            <br></br>
            <button type="submit">Add to Inventory</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

NewItemDetail.propTypes = {
  onNewItemCreation: PropTypes.func.isRequired,
  selectedItemId: PropTypes.string,
  itemsInStock: PropTypes.array.isRequired,
  };

export default NewItemDetail;