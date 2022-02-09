import React from "react";
import Item from "./Item";
import "./ItemList.css";

const ItemList = (props) => {
  return (
    <>
      {props.Productos.length > 0 ? (
        <div className="d-flex justify-content-center flex-wrap container">
          {props.Productos.map((element) => (
            <Item items={element} />
          ))}
        </div>
      ) : (
        <div className="loading show mt-5 row">
          <div className="spin"></div>
          <h4 className="text-center mt-3">...Loading...</h4>
        </div>
      )}
    </>
  );
};
export default ItemList;
