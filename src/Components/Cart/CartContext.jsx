import React, { useState, createContext } from 'react';

export const context = createContext(); 

const CartContext = ({children}) => {
    
    const [cart, setCart] = useState([]);

    function onAdd (Item, contador) {
        if(cart.length > 0) {
          if(cart.find(item => item.id === Item.id)){
            alert(`Ya compraste el articulo "${Item.nombre}" Marca: ${Item.marca}`);
          }else{
            setCart([...cart, {...Item, cantidad: contador}]) 
          }
        }else{
          setCart([{...Item, cantidad: contador}])
        };
    }

    const RemoveItem = (item) => {
        setCart(cart.filter(e => e !== item));
    }

    const ClearCart = () => setCart([]);
    const AddItem = (item) => {}
    const SubstractItem = (item) => {}
    const PurchaseCart = () => {}

    
    
    return( 
        <>  
            <context.Provider value={{cart, setCart, onAdd, ClearCart, PurchaseCart, RemoveItem, AddItem, SubstractItem}} >
                {children}
            </context.Provider>
        </>    
    )
};

export default CartContext;
