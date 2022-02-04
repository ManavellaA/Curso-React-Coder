import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import Count from '../Count/Count'
import { context } from '../Cart/CartContext';

const ItemDetail = ({Items}) => {

  const { cart, setCart } = useContext(context);
  const [view, setView] = useState(true);

  function onAdd (Item, contador) {
      if(cart.length > 0) {
        if(cart.find(item => item.id === Item.id)){
          alert(`Ya compraste el articulo "${Item.nombre}" Marca: ${Item.marca}`);
        }else{
          setCart([...cart, {...Item, cantidad: contador}])
          setView(false);
        }
      }else{
        setCart([{...Item, cantidad: contador}])
        setView(false);
      };
  }

  return (
    <>{
        <div className="d-flex row justify-content-center align-items-center">
          <div className="col-md-6 col-lg-5 d-flex row justify-content-center align-items-center">    
              <h1 className='text-center'>{Items.nombre}</h1>
              <h3 className='text-center'>{Items.marca}</h3>
              <img src={Items.img} alt={Items.nombre} className='mt-3 mb-3 w-50'/>
          </div>  
          <div className="col-md-4 col-lg-3 d-flex row justify-content-center align-items-center">
             <h4 className='text-center'>Precio: $ {Items.precio} </h4>
             <div className='d-flex row justify-content-center align-items-center'>
                {(view) ?
                  <Count Items={Items} onAdd={onAdd} />
                  :
                  <>
                    <p className='text-center'>Agregado al carrito</p> 
                    <Link to={'/cart'} className='text-center text-decoration-none'><button className='text-white btn btn-success'>Finalizar compra</button></Link>
                  </>
                }
              </div>
          </div>  
          <p className='text-center mt-5'>{Items.detalle}</p>
        </div>
      }
      </>
  )
}
export default ItemDetail;