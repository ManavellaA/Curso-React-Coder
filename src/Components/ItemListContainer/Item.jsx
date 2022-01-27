import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({items}) => {
    const StockControl = items.stock <= 0 ? 'Sin Stock' : ''; 
    return (
        <>{
            <Link to={`/Tienda/Item/${items.id}`} className="div__buttons text-decoration-none text-black">
                <h1 className='mt-4'>{items.nombre}</h1>
                <h3 className='mt-1 mb-3'>{items.marca}</h3>
                <img src={items.img} className='w-50' />
                <h2>{StockControl}</h2>
                <h4 className='mb-4'>Precio: ${items.precio}</h4>
            </Link>
          }
        </>
    )
}
export default Item