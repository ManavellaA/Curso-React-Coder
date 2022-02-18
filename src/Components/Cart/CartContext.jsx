import React, { useState, createContext } from "react";
import Alert from '../AuxElements/Alerts'

export const context = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [show, setShow] = useState(false);

  const  onAdd = (Item, contador) => {
    if (cart.length > 0) {
      if (isInCart(Item)) {
        Alert("Error", "Ojooo", `Ya compraste el articulo "${Item.nombre}" Marca: ${Item.marca}`, 2000);
      } else {
        setCart([...cart, { ...Item, cantidad: contador }]);
      }
    } else {
      setCart([{ ...Item, cantidad: contador }]);
    }
  }

  const isInCart = (Items) => {
    return cart.find((e) => e.id === Items.id);
  };

  const Total = cart.reduce((a, b) => a + b.precio * b.cantidad, 0);

  const RemoveItem = (Items) => {
    setCart(cart.filter((e) => e !== Items));
  };

  const ClearCart = () => setCart([]);

  const AddItem = (Items, add) => {
    setCart(cart.map((e) => (e.id === Items.id ? { ...e, cantidad: add } : e)));
  };

  const SubstractItem = (Items, subs) => {
    setCart(cart.map((e) => (e.id === Items.id ? { ...e, cantidad: subs } : e)));
  };

  console.log(cart);

  return (
    <>
      <context.Provider
        value={{
          cart,
          setCart,
          onAdd,
          ClearCart,
          RemoveItem,
          AddItem,
          SubstractItem,
          setShow,
          show,
          isInCart,
          Total
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};

export default CartContext;
