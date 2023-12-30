import React, { Component } from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

class NewItemDetail extends Component {
  constructor(props) {
    super(props);

    const { itemsInStock, selectedItemId } = this.props;
    const selectedItem = itemsInStock.find(item => item.id === selectedItemId);

    this.state = {
      name: selectedItem && selectedItem.name ? selectedItem.name : "",
      price: selectedItem && selectedItem.price ? selectedItem.price : "",
      pieces: selectedItem && selectedItem.pieces ? selectedItem.pieces : "",
      quantity: selectedItem && selectedItem.quantity ? parseInt(selectedItem.quantity, 10) : 0,
    };
  }

  handleNewItemSubmission = (e) => {
    e.preventDefault();

    const { selectedItemId, itemsInStock, onNewItemCreation } = this.props;
    const existingItem = itemsInStock.find((item) => item.id === selectedItemId) || {};

    console.log(this.state);
    console.log(existingItem);

    const updatedItem = {
      id: selectedItemId || v4(),
      name: this.state.name || existingItem.name || "",
      price: this.state.price || existingItem.price || "",
      pieces: this.state.pieces || existingItem.pieces || "",
      quantity: this.state.quantity !== "" ? parseInt(this.state.quantity, 10) : existingItem.quantity || 0,

    };

    onNewItemCreation(updatedItem);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

  }

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
              placeholder="Item Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <label>Price: </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.handleInputChange}
            />
            <label>Pieces: </label>
            <input
              type="text"
              name="pieces"
              placeholder="Pieces"
              value={this.state.pieces}
              onChange={this.handleInputChange}
            />
            <label>Quantity: </label>
            <input
              type="number"
              name="quantity"
              placeholder="1"
              value={this.state.quantity}
              onChange={this.handleInputChange}
            />
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

