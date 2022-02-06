import React, {useContext} from 'react';
import '../Count/Count.css'
import { context } from "./CartContext";

const Controls = ({item}) => {

  const { DelObj } = useContext(context);

  const Delete = () =>  DelObj(item);
  const ClickAdd = () => {}
  const ClickSubtract = () => {}

  return( 
  <>
    <div className='d-flex justify-content-center align-items-center'>
      <button onClick={ClickSubtract} className='btn btn-success'>-</button>
      <h2 className='text-center ms-4 me-4 mt-3 mb-3'>{item.cantidad}</h2>
      <button onClick={ClickAdd} className='btn btn-success'>+</button>
    </div>
    <button onClick={Delete} className='btn btn-danger'>Quitar</button>
  </>)
};

export default Controls