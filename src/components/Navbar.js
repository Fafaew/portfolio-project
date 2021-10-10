import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-scroll';
import { useState } from 'react';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [open, setOpen] = useState(false);
 
    const handleClick = (e) => {
        e.preventDefault();
        const hideMenu = document.getElementById("navbarSupportedContent");
        hideMenu.classList.remove("show");
        const handleToggler = document.getElementById("toggler");
        handleToggler.classList.add("collapsed");
    }
 
    const handleState = (e) => {
        e.preventDefault();
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link smooth={true}
        onClick={handleClick} to="" className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          id="toggler"  onClick={handleState}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                onClick={handleClick}
                to="home"
                offset={-110}
                className="nav-link"
                href="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                onClick={handleClick}
                to="about"
                offset={-110}
                className="nav-link"
                href="/"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                onClick={handleClick}
                to="experience"
                offset={-110}
                className="nav-link"
                href="/"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                onClick={handleClick}
                to="portfolio"
                offset={-110}
                className="nav-link"
                href="/"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                onClick={handleClick}
                to="contacts"
                offset={-110}
                className="nav-link"
                href="/"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                onClick={handleClick}
                to="footer"
                offset={-110}
                className="nav-link"
                href="/"
              >
                Social Media
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
