import React, {useState} from 'react'
import AddOn from '../Cart/AddOn'

const ItemDetail = ({Items}) => {

  const nombre = Items.nombre;
  const marca = Items.marca;
  const precio = Items.precio;
  const [contador, setContador] = useState(Items.stock <= 0 ? 0 : Items.inicial);
  const ClickAdd = () => setContador(contador < Items.stock ? contador + 1 : contador);
  const ClickSubtract = () => setContador(contador > Items.inicial ? contador - 1 : Items.inicial);
  const StockControl = Items.stock <= 0 ? 'Sin Stock' : contador;
  const ClickAddOn = () => Items.stock <= 0 ? alert('No hay stock del producto seleccionado') : AddOn({nombre, marca, precio, contador}); 

  return (
      <>{
            <div className="div__buttons">
                <h1>{nombre}</h1>
                <h3>{Items.marca}</h3>
                <h2>Unidades: {StockControl}</h2>
                <div>
                    <button onClick={ClickSubtract} className="btn btn-success">-</button>
                    <button onClick={ClickAddOn} className="btn btn-success">Agregar al Carrito</button>
                    <button onClick={ClickAdd} className="btn btn-success">+</button>
                </div>
                <h4>Precio: $ {Items.precio} </h4>
            </div>
        }
      </>
  )
}

export default ItemDetail;