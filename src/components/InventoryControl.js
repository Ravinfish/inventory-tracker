import React from "react";
import StockList from "./StockList";
import { v4 } from 'uuid';
import NewStockDetail from "./NewItemForm";
import StockDetail from "./StockDetail";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItemFormVOP: false,
      itemDetailVOP: false,
      selectedId: null,
      masterInventoryList: [
        {
          name: 'Wildflower Bouquet',
          price: '$59.99',
          pieces: '939',
          quantity: '12',
          // imgSrc: "",
          id: v4()
        },
        {
          name: 'Dried Flower Centerpiece',
          price: '$49.99',
          pieces: '812',
          quantity: '10',
          // imgSrc: "",
          id: v4()
        },
        {
          name: 'Bird of Paradise',
          price: '$99.99',
          pieces: '1173',
          quantity: '5',
          // imgSrc: "",
          id: v4()
        },
        {
          name: 'Sunfloweers',
          price: '$12.99',
          pieces: '191',
          quantity: '30',
          // imgSrc: "",
          id: v4()
        },
      ],
      bagItems: []
    };
  }

  handleBagClick = () => {
    this.setState(prevState => ({ newItemFormVOP: !prevState.newItemFormVOP}));
  }

  handleUpdateClick = (newInventory) => {
    const newMasterInventoryList = this.state.masterInventoryList.concat(newInventory);
    this.setState({
      masterInventoryList: newMasterInventoryList,
      newItemFormVOP: false,
    });
  };

  handleUpdate = (updatedInventory) => {
    const updatedList = this.state.masterInventoryList.map(item => {
      if (item.id === this.state.selectedId) {
        return {
          ...item,
          name: updatedInventory.name,
          price: updatedInventory.price,
          pieces: updatedInventory.pieces,
          quantity:updatedInventory.quantity,
          imgSrc: updatedInventory.imgSrc
        };
      }
      return item;
    })
  }

  render() {
    let currentVisibleState = null;
    let buttonText = "Items in Stock";
    currentVisibleState = (
      <>
        <StockList
          addToBag={this.handleBagClick}
          handleUpdate={this.handleUpdateClick}
          itemsInStock={this.state.masterInventoryList}
        />
        <div>
          <button>{buttonText}</button>
        </div>
        </>)

        return (
          <React.Fragment>
            {currentVisibleState}
          </React.Fragment>
        );
        
  }
}



        export default InventoryControl;