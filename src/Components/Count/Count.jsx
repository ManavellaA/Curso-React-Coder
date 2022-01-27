import React, {useState} from 'react'
import AddOn from '../Cart/AddOn'


const Count = ({Items}) => {

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
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-4 d-flex row justify-content-center align-items-center">    
                    <h1>{nombre}</h1>
                    <h3 className='text-center'>{Items.marca}</h3>
                    <img src={Items.img} alt={nombre} className='mt-3 mb-3 w-100'/>
                    <p className='text-center'>{Items.detalle}</p>
                </div>    
                <div className="col-3 d-flex row justify-content-center align-items-center">
                    <h4 className='text-center'>Precio: $ {Items.precio} </h4>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={ClickSubtract} className={disabledButton}>-</button>
                        <h2 className='text-center ms-4 me-4 mt-3 mb-3'>{StockControl}</h2>
                        <button onClick={ClickAdd} className={disabledButton}>+</button>
                    </div>  
                    <button onClick={ClickAddOn} className={disabledButton}>Añadir al Carrito</button>
                </div>
            </div>
        }
      </>
  )
}

export default Count;