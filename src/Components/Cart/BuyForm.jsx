import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { getFirestore } from "../FireBase/Firebase";
import { context } from "./CartContext";
import Alerts from "../AuxElements/Alerts";
import Loading from "../AuxElements/Loading";

function Form() {
  const { cart, clearCart, total, reStock } = useContext(context);

  const [orderId, setOrderId] = useState("");

  const [Load, setLoad] = useState(true);

  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  function handleClick() {
    setLoad(false);
    
    const dataBase = getFirestore();

    if (cart.length > 0) {
      if (
        nameRef.current.value &&
        addressRef.current.value &&
        cityRef.current.value &&
        stateRef.current.value &&
        mobileRef.current.value
      ) {
        if (
          emailRef.current.value.indexOf("@") !== -1 &&
          emailRef.current.value.indexOf(".") !== -1
        ) {
          const orders = dataBase.collection("orders");

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
            total: total,
          };

          orders
            .add(OC)
            .then(({ id }) => {
              setOrderId(id);
              reStock(dataBase);
              clearCart();
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          Alerts("warning", "Upss", "El correo ingresado no es valido", 4000);
        }
      } else {
        Alerts(
          "error",
          "Upss",
          "Te falta completar campos del formulario",
          4000
        );
      }
    } else {
      Alerts(
        "warning",
        "Upss",
        "El carrito esta vacio, debes comprar algo!!",
        4000
      );
    }
  }

  return (
    <>
      {orderId ? (
        <div className="mt-5">
          <div className="text-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              version="1"
              viewBox="0 0 48 48"
              height="4em"
              width="4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="#8BC34A"
                points="24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"
              ></polygon>
              <polygon
                fill="#CCFF90"
                points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
              ></polygon>
            </svg>
          </div>
          <h2 className="text-center mt-3">Reserva Exitosa!</h2>
          <div style={{ color: "green" }}>
            <h3 className="text-center mt-5">Ticket id</h3>
            <h3 className="text-center">"{orderId}"</h3>
          </div>
          <h5 className="text-center mt-5">
            Te enviamos un correo con la información para finalizar tu compra.
          </h5>
          <h5 className="text-center">Gracias!!</h5>
          <div className="text-center mt-5">
            <Link to={"/"}>
              <button className="btn btn-success">Volver al inicio</button>
            </Link>
          </div>
        </div>
      ) : ( Load ? (
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
              type="text"
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
              Reservar compra!!
            </button>
          </div>
        </>
      ) : (
        <Loading msj={'....Enviando....'} />
        )
      )}
    </>
  );
}
export default Form;