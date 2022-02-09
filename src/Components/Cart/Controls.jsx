import React, { useContext } from "react";
import { context } from "./CartContext";

const Controls = ({ item }) => {
  const { RemoveItem, SubstractItem, AddItem, isInCart } = useContext(context);

  const ClickDelete = () => RemoveItem(item);
  
  const ClickAdd = () => {
    let add = item.cantidad;
    add++;
    item.stock >= add
      ? AddItem(item, add)
      : alert(`Limite de stock para este articulo`);
  };
  const ClickSubtract = () => {
    if (item.cantidad > 1) {
      SubstractItem(item, item.cantidad - 1);
    } else {
      alert(`No puedes comprar menos de ${item.inicial} articulo/s`);
    }
  };

  const cantidad = isInCart(item).cantidad;

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={ClickSubtract} className="btn btn-success">
          -
        </button>
        <h2 className="text-center ms-4 me-4 mt-3 mb-3">{cantidad}</h2>
        <button onClick={ClickAdd} className="btn btn-success">
          +
        </button>
      </div>
      <button onClick={ClickDelete} className="btn btn-danger w-50">
        Quitar
      </button>
    </>
  );
};

export default Controls;
