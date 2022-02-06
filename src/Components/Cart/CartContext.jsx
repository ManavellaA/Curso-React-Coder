import React, { useState, createContext } from 'react';

export const context = createContext(); 

const CartContext = ({children}) => {
    
    const [cart, setCart] = useState([]);
    
    const DelObj = (item) => {
        setCart(cart.filter(e => e !== item));
    }

    const ClearCart = () => setCart([]);
    const PurchaseCart = () => {}

    console.log(cart);
    
    return( 
        <>  
            <context.Provider value={{cart, setCart, ClearCart, PurchaseCart, DelObj}} >
                {children}
            </context.Provider>
        </>    
    )
};

export default CartContext;
