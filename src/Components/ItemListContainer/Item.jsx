import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({items}) => {
    return (
        <>{
            <Link to={`/Tienda/Item/${items.id}`} className="text-decoration-none cont">
                <div>
                    <div className="div__buttons">
                        <h5 className='mt-2 mb-3'>{items.nombre} {items.marca}</h5>
                        <img src={items.img} className='w-50' alt={items.nombre} />
                        <h6 className='mt-2 mb-3'>Precio: ${items.precio}</h6>
                    </div>
                </div>
            </Link>
          }
        </>
    )
}
export default Item