import React, { useState, useContext } from "react";
import { context } from "../Cart/CartContext";
import Alerts from "../AuxElements/Alerts";

const Count = ({ Items }) => {
  const { onAdd, setShow, isInCart, AddItem, SubstractItem } =
    useContext(context);

  const view = isInCart(Items) ? false : true;

  const [contador, setContador] = useState(Items.inicial);

  const ClickAdd = () => {
    if (isInCart(Items)) {
      let add = isInCart(Items).cantidad;
      add++;
      isInCart(Items).stock >= add
        ? AddItem(Items, add)
        : Alerts("warning", "Upss", "Limite de stock para este articulo", 2000);
    } else {
      setContador(contador < Items.stock ? contador + 1 : contador);
    }
  };

  const ClickSubtract = () => {
    if (isInCart(Items)) {
      if (isInCart(Items).cantidad > isInCart(Items).inicial) {
        SubstractItem(Items, isInCart(Items).cantidad - 1);
      } else {
        Alerts("warning", "Upss", `No puedes comprar menos de ${isInCart(Items).inicial} articulo`, 2000);
      }
    } else {
      setContador(contador > Items.inicial ? contador - 1 : Items.inicial);
    }
  }; 

  const Control =
    Items.stock <= 0
      ? "Sin Stock"
      : isInCart(Items)
      ? isInCart(Items).cantidad
      : contador;

  const ClickOnAdd = () => {
    onAdd(Items, contador);
    setContador(Items.inicial);
  };

  const disabledButton =
    Items.stock <= 0 ? "disabled btn btn-success w-50" : "btn btn-success w-50";

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={ClickSubtract} className="btn btn-success">
          -
        </button>
        <h2 className="text-center ms-4 me-4 mt-3 mb-3">{Control}</h2>
        <button onClick={ClickAdd} className="btn btn-success">
          +
        </button>
      </div>
      {view ? (
        <button onClick={ClickOnAdd} className={disabledButton}>
          Comprar
        </button>
      ) : (
        <button
          className="text-white btn btn-success w-50"
          onClick={handleShow}
        >
          Ir al carrito
        </button>
      )}
    </>
  );
};
export default Count;
