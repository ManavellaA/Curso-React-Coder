import React, { useState, useContext } from "react";
import { context } from "../Cart/CartContext";

const Count = ({ Items }) => {
  const { onAdd, setShow, isInCart, AddItem, SubstractItem } =
    useContext(context);

  const [contador, setContador] = useState(
    Items.stock <= 0 ? 0 : Items.inicial
  );

  const view = isInCart(Items) ? false : true;

  const ClickAdd = () => {
    if (isInCart(Items)) {
      setContador(contador < Items.stock ? contador + 1 : contador);
      AddItem(Items, contador);
    } else {
      setContador(contador < Items.stock ? contador + 1 : contador);
    }
  };

  const ClickSubtract = () => {
    if (isInCart(Items)) {
      setContador(contador > Items.inicial ? contador - 1 : Items.inicial);
      SubstractItem(Items, contador);
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
