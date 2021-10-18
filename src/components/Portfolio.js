import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import postit from '../images/imgPortfolio/postit.jpg';
import gymImg from '../images/imgPortfolio/gymImg.jpg';
import develop from '../images/imgPortfolio/Develop.jpg';
import dashboard from '../images/imgPortfolio/dashboard.jpg';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h1 className="py-5">Portfolio</h1>
      <div className="container">
        <div className="row">
        <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={dashboard} alt="dashboard" />
              </div>
              <h3>Dashboard</h3>
              <p>
              A admnistrative panel that contains metrics and indicators. That numbers will help the achievement of organizational goals
              </p>
              <div className="portfolioIcons" >
                <a href="https://github.com/Fafaew/react-dashboard" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                <p>Github</p>
                </a>
                <a href="https://fafaew.github.io/react-dashboard" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLaptop} size="2x" />
                <p>Live Demo</p>
                </a>
              </div> 
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
              <div className="portfolioIcons" >
                <a href="https://github.com/Fafaew/Gym-Management" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                <p>Github</p>
                </a>
                <a href="https://fafaew.github.io/react-dashboard" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLaptop} size="2x" />
                <p>Live Demo</p>
                </a>
              </div> 
            </div>
          </div>
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
              <div className="portfolioIcons" >
                <a href="https://github.com/Fafaew/ReactTraskTracker" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                <p>Github</p>
                </a>
                <a href="https://fafaew.github.io/react-dashboard" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLaptop} size="2x" />
                <p>Live Demo</p>
                </a>
              </div>             
            </div>                 
          </div>         
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={develop} alt="computer screen" />
              </div>
              <h3>In Progress</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
