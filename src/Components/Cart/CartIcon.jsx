import React, { useContext } from "react";
import { BiCart } from "react-icons/bi";
import Cart from "./Cart";
import { context } from "./CartContext";

const CartIcon = () => {
  const { cart, setShow } = useContext(context);

  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="ms-3 me-3"
        variant="primary"
        onClick={handleShow}
        type="button"
      >
        <p className="d-inline"> {cart.length > 0 ? cart.length : ""} </p>
        <h3 className="d-inline">
          <BiCart />
        </h3>
      </div>
      <Cart />
    </>
  );
};

export default CartIcon;
