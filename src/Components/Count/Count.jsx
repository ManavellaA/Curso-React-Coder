import React, { useState, useContext } from "react";
import { context } from "../Cart/CartContext";
import Alerts from "../AuxElements/Alerts";
import "./Count.css";

const Count = ({ Item, CartUse }) => {
  const { onAdd, setShow, isInCart, AddItem, SubstractItem, RemoveItem } = useContext(context);

  const view = isInCart(Item) ? false : true;

  const [contador, setContador] = useState(Item.inicial);

  const ClickAdd = () => {
    let msj = () => Alerts("warning", "Upss", "Limite de stock para este articulo", 2000);
    if (isInCart(Item)) {
      Item.stock > isInCart(Item).cantidad 
      ? AddItem(Item) 
      : msj();
    } else {
      if (contador < Item.stock) {
        setContador(contador + 1);
      } else {
        setContador(contador);
        msj();
      }
    }
  };

  const ClickSubtract = () => {
    let msj = (e) => Alerts("warning","Upss",`No puedes comprar menos de ${e} articulo`,2000);
    if (isInCart(Item)) {
      isInCart(Item).cantidad > Item.inicial
        ? SubstractItem(Item)
        : msj(isInCart(Item).inicial);
    } else {
      if (contador > Item.inicial) {
        setContador(contador - 1);
      } else {
        setContador(Item.inicial);
        msj(Item.inicial);
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

  const disabledButton = Item.stock <= 0 ? "disabled btn btn-success" : "btn btn-success";

  const handleShow = () => setShow(true);

  return (
    <div className="div_container">
      <div className="div_buttons">
        <button onClick={ClickSubtract} className={disabledButton}>
          -
        </button>
        <h2 className="text-center ms-4 me-4 mt-3 mb-3">{Control}</h2>
        <button onClick={ClickAdd} className={disabledButton}>
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
        <button className="text-white btn btn-success" onClick={handleShow}>
          Ir al carrito
        </button>
      )}
    </div>
  );
};
export default Count;