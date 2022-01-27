import React from 'react'
import './NavBar.css'
import CartIcon from '../Cart/CartIcon';
import { Link } from 'react-router-dom';

const NavBar = ({arrayElementsNavBar, brand}) => {
      return (
        <>
          <Link to="/" className="d-flex align-items-center justify-content-center m-4 text-decoration-none text-black brand"><h1>{brand}</h1></Link>
          <nav className="navbar navbar-expand-md navbar-light nav">
            <div className="container-fluid justify-content-end">
              <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <CartIcon />
              <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarNav">
                <ul className="navbar-nav align-items-center justify-content-center">
                  {arrayElementsNavBar.map(items => 
                    <li className="nav-item">
                      <Link className="nav-link itemNav" to={items.enlace}>{items.item}</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </>
    )
};

export default NavBar