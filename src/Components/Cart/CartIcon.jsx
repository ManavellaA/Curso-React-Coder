import React, {useState} from 'react'
import { BiCart } from 'react-icons/bi';
import { Offcanvas } from 'react-bootstrap';
import Cart from './Cart';

const CartIcon = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <>          
      <h3 className='ms-3 me-3' variant="primary" onClick={handleShow} type='button'><BiCart /></h3>  
      <Offcanvas show={show} onHide={handleClose}>
        <Cart />
      </Offcanvas>
    </>
    )
}

export default CartIcon