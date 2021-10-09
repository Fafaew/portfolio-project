import React from 'react';
import author from '../me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faNode,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div id="about" className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author..." />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p>
              Hello everyone! I'm Rafael Gomes, a web developer from Minas Gerais,
              Brazil. I have been developing websites for over 2 years.
            </p>
            <p>Apart from coding, some other activities that I love to do:</p>
            <div className="about-marker"></div>
            <p className="about-paragraph">Play Video Games</p>
            <div className="about-marker"></div>
            <p className="about-paragraph">Practice Sports</p>
            <div className="about-marker"></div>
            <p className="about-paragraph">Learn about financial market</p>
            <br />
            <p>Technologies that I use:</p>
            <div className="aboutIcons">
              <FontAwesomeIcon className="icon" icon={faPhp} size="2x" />
              <FontAwesomeIcon className="icon" icon={faNode} size="2x" />
              <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x" />
              <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
