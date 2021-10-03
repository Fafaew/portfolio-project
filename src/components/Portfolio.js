import React from 'react';
import netflix from '../images/netflix.png';
import cityGuide from '../images/city-guide-app.png';
import portfolio from '../images/portfolio.png';
import taskManager from '../images/task-manager.png';
//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
  //Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="Netflix Clone Project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          tenetur alias eum modi reprehenderit natus quidem blanditiis eveniet,
          voluptates quam rem quas iusto. Suscipit, error dicta ea omnis in sed.
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://www.github.com/fafaew')}
        >
          https://www.github.com/fafaew
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupConfigNetflix = {
    titleBar: {
      enable: true,
      text: 'Netflix clone project',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" onclick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={netflix}
              alt="Netflix Clone project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        {/* - */}
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={cityGuide}
              alt="City Guide Projecy project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        {/* - */}
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={portfolio}
              alt="portfolio Clone project"
            />
            <div className="overflow"></div>
          </div>
        </div>
        {/* - */}
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={taskManager}
              alt="Task Manager Clone project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupConfigNetflix} />
    </div>
  );
};

export default Portfolio;
