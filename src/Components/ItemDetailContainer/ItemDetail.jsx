import React from "react";
import Count from "../Count/Count";

const ItemDetail = ({ Item }) => {
  return (
    <>
      {
        <div className="d-flex row justify-content-center align-items-center">
          <div className="col-md-6 col-lg-5 d-flex row justify-content-center align-items-center">
            <h1 className="text-center">{Item.nombre}</h1>
            <h3 className="text-center">{Item.marca}</h3>
            <img
              src={Item.img}
              alt={Item.nombre}
              className="mt-3 mb-3 w-50"
            />
          </div>
          <div className="col-md-4 col-lg-3 d-flex row justify-content-center align-items-center">
            <h4 className="text-center">Precio: $ {Item.precio} </h4>
            <div className="d-flex row justify-content-center align-items-center">
              <Count Item={Item} CartUse={false} />
            </div>
          </div>
          <p className="text-center mt-5">{Item.detalle}</p>
        </div>
      }
    </>
  );
};
export default ItemDetail;