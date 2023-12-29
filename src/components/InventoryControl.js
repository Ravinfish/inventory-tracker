import React from "react";
import StockList from "./StockList";
import { v4 } from 'uuid';
import NewItemDetail from "./NewItemForm";
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
          name: 'Sunflowers',
          price: '$12.99',
          pieces: '191',
          quantity: '30',
          // imgSrc: "",
          id: v4()
        },
      ],

    };
  }

  handleNewItemClick = () => {
    this.setState(prevState => ({ newItemFormVOP: !prevState.newItemFormVOP }));
  }

  handleAddNewItemToInventoryClick = (newInventory) => {
    const newMasterInventoryList = this.state.masterInventoryList.concat(newInventory);
    this.setState({
      masterInventoryList: newMasterInventoryList,
      newItemFormVOP: false,
    });
  };

  handleEditItem = (updatedInventory) => {
    const updatedList = this.state.masterInventoryList.map(item => {
      if (item.id === this.state.selectedId) {
        return {
          ...item,
          name: updatedInventory.name !== undefined ? updatedInventory.name : item.name,
          price: updatedInventory.price !== undefined ? updatedInventory.price : item.price,
          quantity: updatedInventory.quantity !== undefined ? updatedInventory.quantity : item.quantity,
          // imgSrc: updatedInventory.imgSrc !== undefined ? updatedInventory.imgSrc : item.imgSrc
        };
      }
      return item;
    });

    this.setState({
      masterInventoryList: updatedList,
      itemDetailVOP: false
    });
  };

  handleUpdateClick = (id) => {
    this.setState((prevState) => ({
      itemDetailVOP: !prevState.itemDetailVOP,
      selectedId: id
    }));
  };

  addToBag = (id) => {
    const updatedList = this.state.masterInventoryList.map(item => {
      if (item.id === id && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });

    this.setState({
      masterInventoryList: updatedList
    });
  };

  handleReturnToInventoryClick = () => {
    if (this.state.newItemFormVOP) {
      this.setState(prevState => ({ newItemFormVOP: !prevState.newItemFormVOP }));
    } else this.setState(prevState => ({ itemDetailVOP: !prevState.itemDetailVOP }));
  };

  render() {
    let currentVisibleState = null;
    if (this.state.newItemFormVOP) {
      currentVisibleState = (
        <>
          <NewItemDetail onNewItemCreation={this.handleAddNewItemToInventoryClick} />
          <div className="new-item-button">
            <button onClick={this.handleReturnToInventoryClick}>Return to Inventory</button>
          </div>
        </>)
    } else if (this.state.itemDetailVOP) {
      const selectedItem = this.state.masterInventoryList.find(
        (item) => item.id === this.state.selectedId
      );
      currentVisibleState = (
        <>
          <StockDetail
            onItemEdit={this.handleEditItem}
            selectedItemId={this.state.selectedId}
            selectedDetails={selectedItem}
          />
          <div className="new-item-button">
            <button onClick={this.handleReturnToInventoryClick}>Return to Inventory</button>
          </div>
        </>)
    } else currentVisibleState = (
      <>
        <StockList
          addToBag={this.addToBag}
          handleUpdate={this.handleUpdateClick}
          itemsInStock={this.state.masterInventoryList}
        />
        <div className="new-item-button">
          <button onClick={this.handleNewItemClick}>New Stock Item</button>
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