import React from 'react';
import ReactTyped from 'react-typed';

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Software Engineer</h1>
        <ReactTyped
          className="typed-text"
          strings={['PHP', 'Node JS', 'JavaScript', 'React JS']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="/" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
