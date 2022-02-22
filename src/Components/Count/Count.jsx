import React, { useState, useContext } from "react";
import { context } from "../Cart/CartContext";
import Alerts from "../AuxElements/Alerts";
import './Count.css'

const Count = ({ Item, CartUse }) => {
  const { onAdd, setShow, isInCart, AddItem, SubstractItem, RemoveItem } =
    useContext(context);

  const view = isInCart(Item) ? false : true;

  const [contador, setContador] = useState(Item.inicial);

  const ClickAdd = () => {
    if (isInCart(Item)) {
      let add = isInCart(Item).cantidad;
      add++;
      isInCart(Item).stock >= add
        ? AddItem(Item, add)
        : Alerts("warning", "Upss", "Limite de stock para este articulo", 2000);
    } else {
      if (contador < Item.stock) {
        setContador(contador + 1);
      } else {
        setContador(contador);
        Alerts("warning", "Upss", "Limite de stock para este articulo", 2000);
      }
    }
  };

  const ClickSubtract = () => {
    if (isInCart(Item)) {
      if (isInCart(Item).cantidad > isInCart(Item).inicial) {
        SubstractItem(Item, isInCart(Item).cantidad - 1);
      } else {
        Alerts(
          "warning",
          "Upss",
          `No puedes comprar menos de ${isInCart(Item).inicial} articulo`,
          2000
        );
      }
    } else {
      if (contador > Item.inicial) {
        setContador(contador - 1);
      } else {
        setContador(Item.inicial);
        Alerts(
          "warning",
          "Upss",
          `No puedes comprar menos de ${Item.inicial} articulo`,
          2000
        );
      }
    }
  };

  const Control =
    Item.stock <= 0
      ? "Sin Stock"
      : isInCart(Item)
      ? isInCart(Item).cantidad
      : contador;

  const ClickOnAdd = () => {
    onAdd(Item, contador);
    setContador(Item.inicial);
  };

  const ClickDelete = () => RemoveItem(Item);

  const disabledButton =
    Item.stock <= 0 ? "disabled btn btn-success w-50" : "btn btn-success w-50";

  const handleShow = () => setShow(true);

  return (
    <div className="div_container">
      <div className="div_buttons">
        <button onClick={ClickSubtract} className="btn btn-success">
          -
        </button>
        <h2 className="text-center ms-4 me-4 mt-3 mb-3">{Control}</h2>
        <button onClick={ClickAdd} className="btn btn-success">
          +
        </button>
      </div>
      {CartUse === true ? (
        <button onClick={ClickDelete} className="btn btn-danger w-50">
          Quitar
        </button>
      ) : view ? (
        <button onClick={ClickOnAdd} className={disabledButton}>
          Comprar
        </button>
      ) : (
        <button
          className="text-white btn btn-success"
          onClick={handleShow}
        >
          Ir al carrito
        </button>
      )}
    </div>
  );
};
export default Count;
