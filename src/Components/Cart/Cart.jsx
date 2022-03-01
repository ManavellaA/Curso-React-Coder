import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { context } from "./CartContext";
import "./Cart.css";
import Count from '../Count/Count'

const AddOn = () => {
  
  const { cart, ClearCart, Total, show, setShow } = useContext(context);

  const handleClose = () => setShow(false);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carro de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <hr />
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div key={item.id}>
                  <div className="row mb-2">  
                      <div className="col-6">
                        <Link to={`/Tienda/Item/${item.id}`} onClick={handleClose} className="text-decoration-none">
                          <p className="mb-0 text-center text-black">{item.nombre}</p>
                          <p className="mt-0 text-center text-black">Marca: {item.marca}</p>
                          <div className="text-center">
                              <img
                                src={item.img}
                                className="img-fluid"
                                alt={item.nombre}
                              />
                          </div>
                        </Link>
                      </div>
                    <div className="row justify-content-center align-items-center col-6">
                      <Count Item={item} CartUse={true} />
                    </div>
                  </div>
                  <h5 className="text-center mb-4">
                    Precio ${item.precio * item.cantidad}
                  </h5>
                  <hr />
                </div>
              ))}
              <br />
              <h5 className="text-center">Total compra ${Total}</h5>
              <div className="d-flex justify-content-around align-items-center mt-5">
                <Link to={'/Compra'} >
                  <button className="btn btn-success" onClick={handleClose}>
                    Finalizar compra
                  </button>
                </Link>
                <button onClick={ClearCart} className="text-danger btn btn-danger">
                  Borrar Carrito
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-center mt-5">Tu carrito esta vacio!!</h3>
              <Link
                to={"/"}
                onClick={handleClose}
                className="d-flex justify-content-around align-items-center text-decoration-none"
                >
                <button className="btn btn-success mt-3">
                  Buscar algo en la tienda
                </button>
              </Link>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddOn;