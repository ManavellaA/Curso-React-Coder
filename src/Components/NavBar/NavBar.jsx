import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './NavBar.css'
import CartIcon from '../Cart/CartIcon';

const NavBar = ({arrayElementsNavBar}) => {
    return (
        <>
          <a className="d-flex align-items-center justify-content-center m-4 text-decoration-none text-black brand" href="">Ayelen Galvan</a>

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
                      <a className="nav-link itemNav" href="">{items}</a>
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