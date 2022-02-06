import React, {useState, useContext} from 'react'
import { BiCart } from 'react-icons/bi';
import { Offcanvas } from 'react-bootstrap';
import Cart from './Cart';
import { context } from './CartContext';

const CartIcon = () => {

  const { cart } = useContext(context);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <>          
      <div className='ms-3 me-3' variant="primary" onClick={handleShow} type='button'>
        <p className='d-inline'> {cart.length > 0 ? cart.length : ''} </p>
        <h3 className='d-inline'><BiCart /></h3>  
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Cart />
      </Offcanvas>
    </>
    )
}

export default CartIcon