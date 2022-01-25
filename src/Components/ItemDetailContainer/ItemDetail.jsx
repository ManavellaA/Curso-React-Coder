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
  const ClickAddOn = () => AddOn({nombre, marca, precio, contador}); 
  const disabledButton = Items.stock <= 0 ? "disabled btn btn-success" : "btn btn-success";
  
  return (
      <>{
            <div className="div__buttons">
                <h1>{nombre}</h1>
                <h3>{Items.marca}</h3>
                <img src={Items.img} alt="" />
                <p>{Items.detalle}</p>
                <h2>Unidades: {StockControl}</h2>
                <div>
                    <button onClick={ClickSubtract} className={disabledButton}>-</button>
                    <button onClick={ClickAddOn} className={disabledButton}>Agregar al Carrito</button>
                    <button onClick={ClickAdd} className={disabledButton}>+</button>
                </div>
                <h4>Precio: $ {Items.precio} </h4>
            </div>
        }
      </>
  )
}

export default ItemDetail;