import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import postit from '../images/imgPortfolio/postit.jpg';
import gymImg from '../images/imgPortfolio/gymImg.jpg';
import develop from '../images/imgPortfolio/Develop.jpg';

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h1 className="py-5">Portfolio</h1>
      <div className="container">
        <div className="row">
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={postit} alt="task hand" />
              </div>
              <h3>Task Tracker</h3>
              <p>
                It's a single place where you and your team can organize and
                prioritize every single task or item that needs to get done
              </p>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={gymImg} alt="gym weights" />
              </div>
              <h3>Gym Management</h3>
              <p>
                Gym management software is designed to help gym managers and
                owners organize and manage all the aspects of their business
              </p>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={develop} alt="computer screen" />
              </div>
              <h3>In Progress</h3>
              <p>In Development</p>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={develop} alt="computer screen" />
              </div>
              <h3>In Progress</h3>
              <p>In Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
