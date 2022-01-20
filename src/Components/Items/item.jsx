import React, {useState} from 'react'
import AddOn from '../Cart/AddOn';
import './Item.css'

const Item = ({items}) => {

    const nombre = items.nombre;
    const marca = items.marca;
    const precio = items.precio;
    const [contador, setContador] = useState(items.stock <= 0 ? 0 : items.inicial);
    const ClickAdd = () => setContador(contador < items.stock ? contador + 1 : contador);
    const ClickSubtract = () => setContador(contador > items.inicial ? contador - 1 : items.inicial);
    const StockControl = items.stock <= 0 ? 'Sin Stock' : contador;
    const ClickAddOn = () => items.stock <= 0 ? alert('No hay stock del producto seleccionado') : AddOn({nombre, marca, precio, contador}); 

    return (
        <>
            <div className="div__buttons">
                <h1>{nombre}</h1>
                <h3>{items.marca}</h3>
                <h4>Precio: ${items.precio} </h4>
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

export default Item
