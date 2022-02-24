import React, { useState, createContext } from "react";
import { getFirestore } from "../FireBase/Firebase";

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

  const Total = cart.reduce((a, b) => a + b.precio * b.cantidad, 0);

  const RemoveItem = (Items) => {
    setCart(cart.filter((e) => e !== Items));
  };

  const ClearCart = () => setCart([]);

  const AddItem = (Item) => {
    let add = isInCart(Item).cantidad;
    add++;
    setCart(cart.map((e) => (e.id === Item.id ? { ...e, cantidad: add } : e)));
  };

  const SubstractItem = (Item) => {
    let subs = isInCart(Item).cantidad - 1
    setCart(cart.map((e) => (e.id === Item.id ? { ...e, cantidad: subs } : e)));
  };

  const ReStock = () => {
    const db = getFirestore();
    cart.map((e) => {
      let newStock = e.stock - e.cantidad;
      const item = db.collection("items").doc(e.id);
      item.update({stock:newStock})
          .then(() => {
              console.log(`Actualizacion del stock! ${e.id} `);
          })
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
          ClearCart,
          RemoveItem,
          AddItem,
          SubstractItem,
          setShow,
          show,
          isInCart,
          Total,
          ReStock,
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};

export default CartContext;
