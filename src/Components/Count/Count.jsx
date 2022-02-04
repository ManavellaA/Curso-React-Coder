import React, {useState} from 'react'
import './Count.css'

const Count = ({Items, onAdd}) => {
  const [contador, setContador] = useState(Items.stock <= 0 ? 0 : Items.inicial);
  const ClickAdd = () => setContador(contador < Items.stock ? contador + 1 : contador);
  const ClickSubtract = () => setContador(contador > Items.inicial ? contador - 1 : Items.inicial);
  const StockControl = Items.stock <= 0 ? 'Sin Stock' : contador;
  const ClickOnAdd = () => onAdd(Items, contador); 
  const disabledButton = Items.stock <= 0 ? "disabled btn btn-success" : "btn btn-success";
  return (
      <>
          <div className='d-flex justify-content-center align-items-center'>
            <button onClick={ClickSubtract} className='btn btn-success'>-</button>
            <h2 className='text-center ms-4 me-4 mt-3 mb-3'>{StockControl}</h2>
            <button onClick={ClickAdd} className='btn btn-success'>+</button>
          </div>  
          <button onClick={ClickOnAdd} className={disabledButton}>Añadir al Carrito</button>
      </>
  )
}
export default Count;