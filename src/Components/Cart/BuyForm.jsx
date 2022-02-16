import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { getFirestore } from "../FireBase/Firebase";
import { FcApproval } from "react-icons/fc";
import { context } from "./CartContext";
import Alerts from "../AuxElements/Alerts";

function Form() {
  const { cart, ClearCart, Total } = useContext(context);

  const [orderId, setOrderId] = useState("");

  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  function handleClick() {
    const db = getFirestore();

    if (cart.length > 0) {
      if (
        nameRef.current.value !== "" &&
        addressRef.current.value !== "" &&
        cityRef.current.value !== "" &&
        stateRef.current.value !== "" &&
        emailRef.current.value !== "" &&
        mobileRef.current.value !== ""
      ) {
        const orders = db.collection("orders");

        const OC = {
          buyer: {
            name: nameRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value,
            email: emailRef.current.value,
            mobile: mobileRef.current.value,
          },
          date: firebase.firestore.Timestamp.fromDate(new Date()),
          items: cart,
          total: Total,
        };

        orders
          .add(OC)
          .then(({ id }) => {
            setOrderId(id);
            console.log(`Ingreso la OC: ${id}`);
            ClearCart();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Alerts("error", "No se concretó la compra", "Todos los campos son obligatorios y debes completarlos", 5000);
      }
    } else {
      Alerts("warning", "Upsss", "Todavia no compraste nada, tu carrito esta vacio", 3000);
    }
  }

  return (
    <>
      {orderId ? (
        <div className="mt-5">
          <h1 className="text-center">
            <FcApproval />
          </h1>
          <h3 className="text-center mt-1">Tu Orden es la N° "{orderId}"</h3>
          <div className="text-center mt-5">
            <Link to={"/"}>
              <button className="btn btn-success">Volver al inicio</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-center mt-5">Datos de la Compra</h2>
          <div className=" mt-5 flex-wrap container col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3">
            <input
              placeholder="Nombre y Apellido"
              type="text"
              className="mt-3 form-control"
              ref={nameRef}
            />
            <input
              placeholder="Dirección"
              type="text"
              className="mt-3 form-control"
              ref={addressRef}
            />
            <input
              placeholder="Ciudad"
              type="text"
              className="mt-3 form-control"
              ref={cityRef}
            />
            <input
              placeholder="Provincia"
              type="text"
              className="mt-3 form-control"
              ref={stateRef}
            />
            <input
              placeholder="Email"
              type="email"
              className="mt-3 form-control"
              ref={emailRef}
            />
            <input
              placeholder="Celular"
              type="number"
              className="mt-3 form-control"
              ref={mobileRef}
            />
          </div>
          <div className="text-center mt-4 mb-5">
            <button className="btn btn-success" onClick={handleClick}>
              Concretar Compra!!
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default Form;
