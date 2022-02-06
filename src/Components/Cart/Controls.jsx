import React, {useContext} from 'react';
import '../Count/Count.css'
import { context } from "./CartContext";

const Controls = ({props}) => {

  const { elementQuit } = useContext(context);

  const ClickQuit = elementQuit(props);

  

  return( 
  <>
    <div className='d-flex justify-content-center align-items-center'>
      <button onClick={ClickSubtract} className='btn btn-success'>-</button>
      <h2 className='text-center ms-4 me-4 mt-3 mb-3'>{props.contador}</h2>
      <button onClick={ClickAdd} className='btn btn-success'>+</button>
    </div>
    <button onClick={ClickQuit} className='btn btn-danger'>Quitar</button>  
  </>)
};

export default Controls