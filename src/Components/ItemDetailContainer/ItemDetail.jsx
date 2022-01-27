import React from 'react'
import Count from '../Count/Count'

const ItemDetail = ({Items}) => {
  return (
    <>{
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-4 d-flex row justify-content-center align-items-center">    
              <h1>{Items.nombre}</h1>
              <h3 className='text-center'>{Items.marca}</h3>
              <img src={Items.img} alt={Items.nombre} className='mt-3 mb-3 w-50'/>
              <p className='text-center'>{Items.detalle}</p>
          </div>    
          <Count Items={Items} />
        </div>
      }

      </>
  )
}
export default ItemDetail;