import React from 'react';
import './Count.css'

const Controls = (props) => {

  return( 
  <>
    <div className='d-flex justify-content-center align-items-center'>
      <button onClick={props.ClickSubtract} className='btn btn-success'>-</button>
      <h2 className='text-center ms-4 me-4 mt-3 mb-3'>{props.StockControl}</h2>
      <button onClick={props.ClickAdd} className='btn btn-success'>+</button>
    </div>
    {/* <button onClick={props.ClickOnAdd} className={props.disabledButton}>Añadir al Carrito</button> */}
    <button onClick={props.ClickQuit} className='btn btn-danger'>Quitar</button>  
      {/* { props.btnAux === true ?
      <button onClick={props.ClickQuit} className='btn btn-danger'>Quitar</button>
      :
      <button onClick={props.ClickOnAdd} className={props.disabledButton}>Añadir al Carrito</button>
      } */}
  </>)
};

export default Controls