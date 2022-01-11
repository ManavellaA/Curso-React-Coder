import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BiCart } from 'react-icons/bi';

class CartIcon extends React.Component {
  render() {
    return <h3 className='ms-3 me-3'><BiCart /></h3>  
  }
}

export default CartIcon