import React, { useContext } from "react";
import { BiCart } from "react-icons/bi";
import Cart from "./Cart";
import { context } from "./CartContext";
import './CartIcon.css'

const CartIcon = () => {
  const { cart, setShow } = useContext(context);

  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="icon text-center"
        variant="primary"
        onClick={handleShow}
        type="button"
      >
        <div className="mt-2">
          <p className="d-inline"> {cart.length > 0 ? cart.length : ""} </p>
          <h3 className="d-inline">
            <BiCart />
          </h3>
        </div>
      </div>
      <Cart />
    </>
  );
};

export default CartIcon;
