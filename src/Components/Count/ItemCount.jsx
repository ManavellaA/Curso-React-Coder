import React, {useState}  from 'react';
import './ItemCount.css';
import AddOn from '../Cart/AddOn';

const ItemCount = ({stock, inicial, nombre}) => {

    const [contador, setContador] = useState(stock <= 0 ? 0 : inicial);
    const ClickAdd = () => setContador(contador < stock ? contador + 1 : contador);
    const ClickSubtract = () => setContador(contador > inicial ? contador - 1 : inicial);
    const StockControl = stock <= 0 ? 'Sin Stock' : contador;
    const ClickAddOn = () => stock <= 0 ? alert('No hay stock del producto seleccionado') : AddOn({nombre, contador}); 
    
    return (
        <>
         <div className="div__buttons">
            <h1>{nombre}</h1>
            <h2>Unidades: {StockControl}</h2>
            <div>
                <button onClick={ClickSubtract} className="btn btn-success">-</button>
                <button onClick={ClickAdd} className="btn btn-success">+</button>
            </div>
            <div>
                <button onClick={ClickAddOn} className="btn btn-success">Agregar al Carrito</button>
            </div>
         </div>
        </>
    )
}

export default ItemCount