import React, {useContext} from 'react';
import { context } from "./CartContext";

const Controls = ({item}) => {

  const { RemoveItem, SubstractItem, AddItem} = useContext(context);

  const ClickDelete = () =>  RemoveItem(item);
  const ClickAdd = () => AddItem(item);
  const ClickSubtract = () => SubstractItem(item);

  return( 
  <>
    <div className='d-flex justify-content-center align-items-center'>
      <button onClick={ClickSubtract} className='btn btn-success'>-</button>
      <h2 className='text-center ms-4 me-4 mt-3 mb-3'>{item.cantidad}</h2>
      <button onClick={ClickAdd} className='btn btn-success'>+</button>
    </div>
    <button onClick={ClickDelete} className='btn btn-danger w-50'>Quitar</button>
  </>)
};

export default Controls