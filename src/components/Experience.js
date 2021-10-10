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
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>personal projects and worked as a freelancer</p>
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

    //     <div id="experience" className="experience">
    //       <div className="d-flex justify-content-center my-5">
    //         <h1>Experience</h1>
    //       </div>
    //       <div className="container experience-wrapper">
    //         <div className="timeline-block timeline-block-right">
    //           <div className="marker"></div>
    //           <div className="timeline-content">
    //             <h3>2019</h3>
    //             <p>
    //               Start my carrer as developer, creating personal projects and
    //               working as a freelancer
    //             </p>
    //           </div>
    //         </div>
    //         {/* - */}
    //         <div className="timeline-block timeline-block-left">
    //           <div className="marker"></div>
    //           <div className="timeline-content">
    //             <h3>2020-2021</h3>
    //             <p>Worked with PHP and JavaScript</p>
    //           </div>
    //         </div>
    //         {/* - */}
    //         <div className="timeline-block timeline-block-right">
    //           <div className="marker"></div>
    //           <div className="timeline-content">
    //             <h3>2016-2017</h3>
    //             <p>
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
    //               tempora sint voluptates veritatis officia, omnis facilis
    //               asperiores magnam esse explicabo repellat quisquam rem
    //               consequuntur consectetur cumque doloribus porro quia accusamus.
    //               Aperiam voluptatem labore unde quidem necessitatibus, consequatur
    //               assumenda nam eveniet.
    //             </p>
    //           </div>
    //         </div>
    //         {/* - */}
    //         <div className="timeline-block timeline-block-left">
    //           <div className="marker"></div>
    //           <div className="timeline-content">
    //             <h3>2018-2019</h3>
    //             <p>
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
    //               tempora sint voluptates veritatis officia, omnis facilis
    //               asperiores magnam esse explicabo repellat quisquam rem
    //               consequuntur consectetur cumque doloribus porro quia accusamus.
    //               Aperiam voluptatem labore unde quidem necessitatibus, consequatur
    //               assumenda nam eveniet.
    //             </p>
    //           </div>
    //         </div>
    //         {/* - */}
    //         <div className="timeline-block timeline-block-right">
    //           <div className="marker"></div>
    //           <div className="timeline-content">
    //             <h3>2014-2015</h3>
    //             <p>
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
    //               tempora sint voluptates veritatis officia, omnis facilis
    //               asperiores magnam esse explicabo repellat quisquam rem
    //               consequuntur consectetur cumque doloribus porro quia accusamus.
    //               Aperiam voluptatem labore unde quidem necessitatibus, consequatur
    //               assumenda nam eveniet.
    //             </p>
    //           </div>
    //         </div>
    //         {/* - */}
    //         <div className="timeline-block timeline-block-left">
    //           <div className="marker"></div>
    //           <div className="timeline-content">
    //             <h3>2018-2020</h3>
    //             <p>
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
    //               tempora sint voluptates veritatis officia, omnis facilis
    //               asperiores magnam esse explicabo repellat quisquam rem
    //               consequuntur consectetur cumque doloribus porro quia accusamus.
    //               Aperiam voluptatem labore unde quidem necessitatibus, consequatur
    //               assumenda nam eveniet.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
  );
};

export default Experience;
