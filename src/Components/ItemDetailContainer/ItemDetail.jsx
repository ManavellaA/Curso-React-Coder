import React, {useState} from 'react'
import Count from '../Count/Count'

const ItemDetail = ({Items}) => {

  const [count, SetCount] = useState(true);
  
  function onAdd (nombre, marca, precio, contador) {
    SetCount(false);
    console.log('Compraste el producto'+nombre+marca+precio+contador);
  }; 

  return (
    <>{
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-4 d-flex row justify-content-center align-items-center">    
              <h1>{Items.nombre}</h1>
              <h3 className='text-center'>{Items.marca}</h3>
              <img src={Items.img} alt={Items.nombre} className='mt-3 mb-3 w-50'/>
              <p className='text-center'>{Items.detalle}</p>
          </div>  
          <div className="col-3 d-flex row justify-content-center align-items-center">
             <h4 className='text-center'>Precio: $ {Items.precio} </h4>
              {(count) ?
                <Count Items={Items} onAdd={onAdd} />
                :
                <p>Agregado al carrito</p>  
              }
          </div>  

        </div>
      }
      </>
  )
}
export default ItemDetail;