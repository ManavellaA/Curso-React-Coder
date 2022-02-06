import React, {useContext} from 'react'
import {Offcanvas} from 'react-bootstrap';
import { context } from "./CartContext";


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

                {cart.map(item =>{ <div>
                    <img src={item.img} style={'width: 5%'} />
                    <p>{item.name} {item.marca} </p>

                </div>})
                }

            </Offcanvas.Body>
        </>
    )
}

export default AddOn
