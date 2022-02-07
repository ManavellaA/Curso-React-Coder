import React from "react";
import Item from "./Item";
import "./ItemList.css";

const ItemList = (props) => {
  return (
    <>
      {props.Productos.length > 0 ? (
        <div className="d-flex justify-content-center w-100">
          {props.Productos.map((element) => (
            <Item items={element} />
          ))}
        </div>
      ) : (
        <div className="loading show mt-5">
          <div className="spin"></div>
        </div>
      )}
    </>
  );
};
export default ItemList;
