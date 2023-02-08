import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink className="navbar-item">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </NavLink>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>
              <a className="navbar-item">
                Documentation
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar