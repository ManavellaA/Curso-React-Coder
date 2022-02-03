import React, { useState, useEffect, createContext } from 'react';

export const context = createContext(); 

const CartContext = ({children}) => {
    
    const [cart, setCart] = useState([]);

    return( 
        <>  
            <context.Provider value={{cart, setCart}} >
                {children}
            </context.Provider>
        </>    
    )
};

export default CartContext;
