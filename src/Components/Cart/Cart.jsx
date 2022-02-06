import React, {useContext} from 'react'
import {Offcanvas} from 'react-bootstrap';
import { context } from "./CartContext";
import './Cart.css'
import Controls from './Controls'

const AddOn = () => {
    
    const { cart, ClearCart, PurchaseCart } = useContext(context);



    return (
        <>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                
                    Carro de Compras
                
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cart.length > 0 ? <>
                    {cart.map(item =>  
                        <>
                        <div className='row mb-5'>
                            <div className='col-6'>   
                                <p className='mb-0 text-center'>{item.nombre}</p>    
                                <p className='mt-0 text-center'>Marca: {item.marca}</p>
                                <div className='text-center'>
                                    <img src={item.img} className='img-fluid' alt={item.nombre} />
                                </div>
                            </div>
                            <div className='row justify-content-center align-items-center col-6'>
                            <Controls item={item} />
                            </div>
                        </div>
                        </>
                    )}
                    <br />
                    <div className='d-flex justify-content-around align-items-center mt-5' >    
                        <button onClick={PurchaseCart} className='btn btn-success'>Finalizar compra</button>
                        <button onClick={ClearCart} className='btn btn-danger'>Borrar Carrito</button>
                    </div>
                    </>
                    :
                    <h3 className='text-center mt-5' >Carrito Vacio</h3>
                }
            </Offcanvas.Body>
        </>
    )
}

export default AddOn
