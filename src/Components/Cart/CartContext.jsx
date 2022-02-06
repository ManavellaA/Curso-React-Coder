import React, { useState, createContext } from 'react';

export const context = createContext(); 

const CartContext = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const elementQuit = (Item) => {
        console.log(Item);
        console.log(cart.indexOf( Item )) 
        
        let i = cart.indexOf( Item );
        i !== -1 && setCart(cart.splice( i, 1 ));
        
        console.log(cart)
    }
    
    
    
    
    const ClearCart = () => setCart([]);
    const PurchaseCart = () => {}
    
    console.log(cart)
    
    return( 
        <>  
            <context.Provider value={{cart, setCart, elementQuit, ClearCart, PurchaseCart}} >
                {children}
            </context.Provider>
        </>    
    )
};

export default CartContext;
