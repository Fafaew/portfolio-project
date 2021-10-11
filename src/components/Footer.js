import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,  faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6" />            
      <div className="col-md-7 mx-auto">
          <div className="col-lg-5 col-md-12 col-sm-12 align-items-center">
          <h4 className="footer-text">
              Find Me On 
            </h4> 
            <div className="d-flex justify-content-center">
              <div className="footer-icons" >
                  <a href="https://twitter.com/fafaelgomes" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon className="mx-auto" icon={faTwitter} size="3x" />
                    <p>Twitter</p>
                  </a>                                   
              </div> 
              <div className="footer-icons" >
                  <a href="https://www.linkedin.com/in/rafael-gomes-tregelas-bb6775138/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon className="mx-auto" icon={faLinkedin} size="3x" />
                    <p>LinkedIn</p>
                  </a>                                   
              </div> 
              <div className="footer-icons" >
                  <a href="https://github.com/Fafaew" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon className="mx-auto" icon={faGithub} size="3x" />
                    <p>Github</p>
                  </a>                                   
              </div>                    
            </div>                                   
          </div>
          </div>
          <div className="city-footer">
              <p>Minas Gerais | Brazil</p>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
