import React, {useContext} from 'react'
import {Offcanvas} from 'react-bootstrap';
import { context } from "./CartContext";
import Controls from '../Count/Controls';

const AddOn = () => {
    
    const { cart, setCart, elementQuit } = useContext(context);

    return (
        <>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                
                    Carro de Compras
                
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

                {cart.map(item =>  
                    <div className='d-inline'>
                    {/* <img src={item.img} /> */}
                    <p className='d-inline'>{item.nombre} {item.marca}</p>
                    <Controls className='d-inline' />
                    </div>
                )}

            </Offcanvas.Body>
        </>
    )
}

export default AddOn
