import React from "react";
import StockItem from "./StockItem";
import PropTypes from 'prop-types';

function StockList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.itemsInStock.map((item, index) =>
        <StockItem
          name={item.name}
          price={item.price}
          pieces={item.pieces}
          quantity={parseInt(item.quantity, 10)}
          id={item.id}
          addToBag={props.addToBag}
          handleUpdate={props.handleUpdate}
          key={index} />
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