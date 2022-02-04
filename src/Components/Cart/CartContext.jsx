import React, { useState, createContext } from 'react';

export const context = createContext(); 

const CartContext = ({children}) => {
    
    const [cart, setCart] = useState([]);
    console.log(cart);
    console.log(cart.length);

    return( 
        <>  
            <context.Provider value={{cart, setCart}} >
                {children}
            </context.Provider>
        </>    
    )
};

export default CartContext;
