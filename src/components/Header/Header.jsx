import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Header() {
  const navMenu = [
    { name: "Home", slug: "" },
    { name: "About", slug: "" },
    { name: "Menu", slug: "" },
    { name: "Events", slug: "" },
    { name: "Chefs", slug: "" },
    { name: "Gallery", slug: "" },
    { name: "Dropdown", slug: "" },
    { name: "Contact", slug: "" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">

      <div className="container-fluid mx-auto px-4 py-2 d-flex justify-content-between align-items-center">
        <h2 className='navbar-brand'><a href="/" className='text-black text-decoration-none'>Yummy <span className='text-danger'>.</span></a></h2>

        {/* Mobile screen button */}
        <div>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsNavOpen(!isNavOpen)}>
            {/* <span className="navbar-toggler-icon"></span> */}
            {isNavOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}

          </button>
        </div>

        {/* navbar menu */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} `} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navMenu.map((menu, index) => (
              <li className='nav-item custom-list-item text-secondary ' key={index}>
                <a className="nav-link " aria-current="page" href="#">{menu.name}</a>
              </li>
            ))}
          </ul>
          <button className='btn btn-danger d-md-block d-none'>Book a Table</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
