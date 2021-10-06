import React from 'react';
import ReactTyped from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Software Developer</h1>
        <ReactTyped
          className="typed-text"
          strings={['PHP', 'Node JS', 'JavaScript', 'React JS']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="contacts" className="btn-main-offer">
          <Link
            smooth={true}
            to="contacts"
            offset={-110}
            className="nav-link"
            href="/"
          >
            contact me
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Header;
