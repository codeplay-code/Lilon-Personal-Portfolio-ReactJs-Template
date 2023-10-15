import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";


const Experience = ({ data }) => {
  const { text, experience, resumeCv } = data;
  return (
    <section className="section experience-section bg-g">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="section-heading">
              <SectionHeading title="My Experience" subTitle="Experience" />
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{text}</p>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <a href={resumeCv} className="px-btn dark" download>
                  Download my resume <Icon icon="bi-download" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <ul className="resume-box">
              {experience.map((element, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>-{element.start} - {element.end}</span>
                    <label>-{element.subtitle}</label>
                  </div>
                  <h5>{element.title}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Experience.propTypes = {
  data: PropTypes.object
}

export default Experience;
