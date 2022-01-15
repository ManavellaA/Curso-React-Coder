import React, {useState}  from 'react';
import './ItemCount.css';

const ItemCount = ({stock, inicial, nombre}) => {

    const [contador, setContador] = useState(1);
    const ClickAdd = () => setContador(contador <= stock ? contador + 1 : contador);
    const ClickSubtract = () => setContador(contador > inicial ? contador - 1 : inicial);
    // const ClickAddOn = () => 
    // arrayOfCart.push({nombre, contador}); 

    const amountStock = () => stock <= 0 ? 
    
    (<div className="div__buttons">
        <h1>{nombre}</h1>  
        <h2>Sin Stock</h2>  
     </div>)
    
    : 
    
    (<>
     <div className="div__buttons">
        <h1>{nombre}</h1>    
        <h2>Unidades: {contador}</h2>  
        <div>
            <button onClick={ClickSubtract} className="btn btn-success">-</button>
            <button onClick={ClickAdd} className="btn btn-success">+</button>
        </div>
        <div>
            {/* <button onClick={ClickAddOn} className="btn btn-success">Agregar al Carrito</button> */}
        </div>
     </div>
     </>);


    return (
        <>
            {amountStock()}
        </>
    )
}

export default ItemCount