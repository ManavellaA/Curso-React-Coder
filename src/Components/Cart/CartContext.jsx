import React, { useState, createContext } from "react";

export const context = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [show, setShow] = useState(false);

  function onAdd(Item, contador) {
    if (cart.length > 0) {
      if (isInCart(Item)) {
        alert(`Ya compraste el articulo "${Item.nombre}" Marca: ${Item.marca}`);
      } else {
        setCart([...cart, { ...Item, cantidad: contador }]);
      }
    } else {
      setCart([{ ...Item, cantidad: contador }]);
    }
  }

  const isInCart = (item) => {
    return cart.find((e) => e.id === item.id);
  };

  const RemoveItem = (item) => {
    setCart(cart.filter((e) => e !== item));
  };

  const ClearCart = () => setCart([]);

  const AddItem = (item, add) => {
    setCart(cart.map((e) => (e.id === item.id ? { ...e, cantidad: add } : e)));
  };

  const SubstractItem = (item, subs) => {
    setCart(cart.map((e) => (e.id === item.id ? { ...e, cantidad: subs } : e)));
  };
  const PurchaseCart = () => {};

  console.log(cart);

  return (
    <>
      <context.Provider
        value={{
          cart,
          setCart,
          onAdd,
          ClearCart,
          PurchaseCart,
          RemoveItem,
          AddItem,
          SubstractItem,
          setShow,
          show,
          isInCart,
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};

export default CartContext;
