import React from "react";
import StockItem from "./StockItem";
import PropTypes from 'prop-types';

function StockList(props){
  return (
    <React.Fragment>
      <hr />
      {props.itemsInStock.map((item, index) =>
      <StockItem
      imgSrc={item.imgSrc}
      name={item.name}
      price={item.price}
      pieces={item.pieces}
      quantityRemaining={item.quantity}
      id={item.id}
      addToBag={() => props.addToBag(item.id)}
      handleUpdate={() => props.handleUpdate(item.id)}
      key={index}/>
      )}
    </React.Fragment>
  );
}
StockList.propTypes = {
  itemsInStock: PropTypes.array.isRequired,
  addToBag: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
}; 

export default StockList;