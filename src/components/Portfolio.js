import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import crypto from "../images/imgPortfolio/crypto.jpg";
import ecommerce from "../images/imgPortfolio/ecommerce.jpg";
import thermometer from "../images/imgPortfolio/thermometer.jpg";
import dashboard from "../images/imgPortfolio/dashboard.jpg";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h1 className="py-5">Portfolio</h1>
      <div className="container">
        <div className="row">
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={dashboard} alt="dashboard"/>
              </div>
              <h3>Dashboard</h3>
              <p>
                A admnistrative panel with metrics and indicators that
                 will help the achievement of organizational goals
              </p>
              <div className="portfolioIcons">
                <a
                  href="https://github.com/Fafaew/react-dashboard"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                  <p>Github</p>
                </a>
                <a
                  href="https://fafaew.github.io/react-dashboard"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLaptop} size="2x" />
                  <p>Live Demo</p>
                </a>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={ecommerce} alt="gym weights" />
              </div>
              <h3>E-commerce</h3>
              <p>
              A Website site to buy and sell of products and services all over the world
              </p>
              <div className="portfolioIcons">
                <a
                  href="https://github.com/Fafaew/react-ecommerce"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                  <p>Github</p>
                </a>
                <a
                  href="https://reactecommerceapp.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLaptop} size="2x" />
                  <p>Live Demo</p>
                </a>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={crypto} alt="task hand" />
              </div>
              <h3>Crypto Tracker</h3>
              <p> Manage your investments with this tracker for over 1000 cryptocurrencies. Developed using CoinGecko API
              </p>
              <div className="portfolioIcons">
                <a
                  href="https://github.com/Fafaew/react-cryptocurrency-tracker"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                  <p>Github</p>
                </a>
                <a
                  href="https://cryptocurr-react.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLaptop} size="2x" />
                  <p>Live Demo</p>
                </a>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="portfolio-image">
                <img src={thermometer} alt="task hand" />
              </div>
              <h3>Weather Location</h3>
              <p>
                Find the local weather forecast now for over 3.5 million
                locations across the globe with OpenWeather API
              </p>
              <div className="portfolioIcons">
                <a
                  href="https://github.com/Fafaew/weather-location"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                  <p>Github</p>
                </a>
                <a
                  href="https://fafaew.github.io/weather-location/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLaptop} size="2x" />
                  <p>Live Demo</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
