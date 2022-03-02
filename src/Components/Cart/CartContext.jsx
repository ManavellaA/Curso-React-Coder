import React, { useState, createContext } from "react";

export const context = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [show, setShow] = useState(false);

  const onAdd = (Item, contador) => {
    if (cart.length > 0) {
        setCart([...cart, { ...Item, cantidad: contador }]);  
    } else {
      setCart([{ ...Item, cantidad: contador }]);
    }
  }

  const isInCart = (Items) => {
    return cart.find((e) => e.id === Items.id);
  };

  const total = cart.reduce((a, b) => a + b.precio * b.cantidad, 0);

  const removeItem = (Items) => {
    setCart(cart.filter((e) => e !== Items));
  };

  const clearCart = () => setCart([]);

  const addItem = (Item) => {
    let add = isInCart(Item).cantidad;
    add++;
    setCart(cart.map((e) => (e.id === Item.id ? { ...e, cantidad: add } : e)));
  };

  const substractItem = (Item) => {
    let substract = isInCart(Item).cantidad - 1
    setCart(cart.map((e) => (e.id === Item.id ? { ...e, cantidad: substract } : e)));
  };

  const reStock = (dataBase) => {
    cart.map((e) => {
      let newStock = e.stock - e.cantidad;
      const item = dataBase.collection("items").doc(e.id);
      item.update({stock:newStock})
          .catch((err) => {
              console.log(err);
          });
    });
  };

  return (
    <>
      <context.Provider
        value={{
          cart,
          setCart,
          onAdd,
          clearCart,
          removeItem,
          addItem,
          substractItem,
          setShow,
          show,
          isInCart,
          total,
          reStock,
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};

export default CartContext;