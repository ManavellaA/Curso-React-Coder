import React, {useState}  from 'react';
import './ItemCount.css';

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);
    const ClickAdd = () => setContador(contador + 1);
    const ClickSubtract = () => setContador(contador - 1);
    // const ClickSend = () => stock >= contador ?  : setContador(1);
    const amountStock = () => stock === 0 ? 
    (<div className="div__buttons">
        <h1>Sin Stock</h1>  
     </div>)
    : 
    (<div className="div__buttons">
        <h1>Unidades: {contador}</h1>  
        <div>
            <button onClick={ClickSubtract} className="btn btn-success">-</button>
            <button onClick={ClickAdd} className="btn btn-success">+</button>
        </div>
        <div>
            {/* <button onClick={ClickSend} className="btn btn-success">Agregar al Carrito</button> */}
        </div>
     </div>);



    return (
        <>
            {amountStock()}
        </>
    )
}

export default ItemCount