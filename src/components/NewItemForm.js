// import React from "react";
// import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
// import { render } from "@testing-library/react";

// class NewItemDetail extends React.Component {

//   constructor(props) {
//     super(props);

//     const selectedItem = this.props.itemsInStock.find(item => item.id === this.props.selectedItemId);

//     this.state = {
//       name: selectedItem ? selectedItem.name : "",
//       price: selectedItem ? selectedItem.price : "",
//       pieces: selectedItem ? selectedItem.pieces : "",
//       quantity: selectedItem ? selectedItem.quantity : "",
//       // imgSrc: selectedItem ? selectedItem.imgSrc : "",
//     };
//   }

//   handleNewItemSubmission = (e) => {
//     e.preventDefault();

//     const itemId = this.props.selectedItemId || v4();
//     const existingItem = this.props.itemsInStock.find(item => item.id === this.props.selectedId);

//     const updatedItem = {
//       id: itemId,
//       name: this.state.name !== "" ? this.state.name : (existingItem ? exsistingItem.name : ""),
//       price: this.state.price !== "" ? this.state.price : (existingItem ? exsistingItem.price : ""),
//       pieces: this.state.pieces !== "" ? this.state.pieces : (existingItem ? exsistingItem.pieces : ""),
//       quantity: this.state.quantity !== "" ? this.state.quantity : (existingItem ? exsistingItem.quantity : ""),
//       // imgSrc: this.state.imgSrc !== "" ? this.state.imgSrc : this.selectedItem.imgSrc,
//     };

//     this.props.onNewItemCreation(updatedItem);
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="input-form">
//           <h2>Add New Item</h2>
//           <form onSubmit={this.handleNewItemSubmission}>
//             <label>Name: </label>
//             <input
//               type="text"
//               name="name"
//               defaultValue={this.state.name} />
//             <label>Price: </label>
//             <input
//               type="text"
//               name="price"
//               defaultValue={this.state.price} />
//             <label>Pieces: </label>
//             <input
//               type="text"
//               name="pieces"
//               defaultValue={this.state.pieces} />
//             <label>Quantity: </label>
//             <input
//               type="number"
//               name="quantity"
//               defaultValue={this.state.quantity} />
//             {/* <label>Image: </label>
//             <input
//               type="text"
//               name="imgSrc"
//               placeholder="Image Link" /> */}
//             <br></br>
//             <button type="submit">Add to Inventory</button>
//           </form>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// NewItemDetail.propTypes = {
//   onNewItemCreation: PropTypes.func.isRequired,
//   selectedItemId: PropTypes.string,
//   itemsInStock: PropTypes.array.isRequired,
// };

// export default NewItemDetail;
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
              defaultValue={this.state.name}
            />
            <label>Price: </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              defaultValue={this.state.price}
            />
            <label>Pieces: </label>
            <input
              type="text"
              name="pieces"
              placeholder="Pieces"
              defaultValue={this.state.pieces}
            />
            <label>Quantity: </label>
            <input
              type="number"
              name="quantity"
              placeholder="1"
              defaultValue={this.state.quantity}
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

