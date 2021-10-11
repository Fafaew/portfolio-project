import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCode,
  faLaptopCode,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <VerticalTimeline>
      <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-3">
          <h1>Experience</h1>
        </div>
      </div>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'var(--primary-orange)', color: '#666666' }}
        icon={
          <FontAwesomeIcon className="icon-experience" icon={faStar} size="" />
        }
      >
        <p>12/2019</p>
        <h3 className="vertical-timeline-element-title">
          Started my carrer as a Software Developer
        </h3>
        <p>Personal projects and worked as a freelancer
          <br />
          PHP, JavaScript
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'var(--primary-orange)', color: '#666666' }}
        icon={
          <FontAwesomeIcon
            className="icon-experience"
            icon={faLaptopCode}
            size=""
          />
        }
      >
        <p>10/2020 - 02/2021</p>
        <h3 className="vertical-timeline-element-title">Web Development</h3>
        <h4 className="vertical-timeline-element-subtitle">Teknisa</h4>
        <p>PHP, JavaScript</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'var(--primary-orange)', color: '#666666' }}
        icon={
          <FontAwesomeIcon
            className="icon-experience"
            icon={faFileCode}
            size=""
          />
        }
      >
        <p>02/2021 - now</p>
        <h3 className="vertical-timeline-element-title">
          FullStack Applications
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Ci&T</h4>
        <p>PHP, Drupal and JavaScript</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Experience;
