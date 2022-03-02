import React from "react";
import Item from "./Item";
import Loading from "../AuxElements/Loading";

const ItemList = (props) => {
  return (
    <>
      {props.Productos.length > 0 ? (
        <div className="d-flex justify-content-center flex-wrap container col-lg-8">
          {props.Productos.map((element) => (
            <Item items={element} key={element.id} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default ItemList;