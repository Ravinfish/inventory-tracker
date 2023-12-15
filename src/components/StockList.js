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
      quantity={item.quantity}
      id={item.id}
      addToBag={props.addToBag}
      key={index}/>
      )}
    </React.Fragment>
  );
}
StockList.propTypes = {
  itemsInStock: PropTypes.array.isRequired,
  addToBag: PropTypes.func.isRequired,
};

export default StockList;