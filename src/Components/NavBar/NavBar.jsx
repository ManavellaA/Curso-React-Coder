import React from 'react'
import './NavBar.css'
import CartIcon from '../Cart/CartIcon';

const NavBar = ({arrayElementsNavBar, brand}) => {
      return (
        <>
          {brand.map(items => <a className="d-flex align-items-center justify-content-center m-4 text-decoration-none text-black brand" href={items.enlace}> {items.nombre} </a>)}
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
                      <a className="nav-link itemNav" href={items.enlace}>{items.item}</a>
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