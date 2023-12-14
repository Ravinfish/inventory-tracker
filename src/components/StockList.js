import React from "react";
import StockItem from "./StockItem";
import PropTypes from 'prop-types';

function StockList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.itemsInStock.map((item, index) =>
      <StockItem
      imgSrc={item.imgSrc}
      name={item.name}
      price={item.price}
      pieces={item.pieces}
      quantity={item.quantity}
      id={item.id}
      addToBag={item.addToBag}
      key={index}/>
      )}
    </React.Fragment>
  );
}
StockList.PropTypes = {
  StockList: PropTypes.array
};

export default StockList