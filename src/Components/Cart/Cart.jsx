import React from 'react'
import {Offcanvas} from 'react-bootstrap';
import {  } from "./CartContext";


const AddOn = (AddOfCart) => {
    


    return (
        <>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                
                    Carro de Compras
                
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

                Contenido del Carrito

            </Offcanvas.Body>
        </>
    )
}

export default AddOn
