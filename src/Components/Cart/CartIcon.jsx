import React, {useState} from 'react'
import { BiCart } from 'react-icons/bi';
import { Offcanvas } from 'react-bootstrap';

const CartIcon = (placement='end') => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <>          
      <h3 className='ms-3 me-3' variant="primary" onClick={handleShow} type='button'><BiCart /></h3>  
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carro de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Contenido del Carrito
        </Offcanvas.Body>
      </Offcanvas>
    </>
    )
}

export default CartIcon