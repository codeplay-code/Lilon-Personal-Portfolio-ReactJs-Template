import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '../Modal/Modal';


const Portfolio = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (imgLink, title, subTitle, paragraphList) => {
    console.log(imgLink, title, subTitle, paragraphList);
    let tempData = [imgLink, title, subTitle, paragraphList];
    setTempData(element => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }


  return (
    <section>
      <div id="work" className="section work-section">
        <div className="container">
          <SectionHeading title="RECENT PROJECT" subTitle="My Work" />
          <div className="row gy-5 lightbox-gallery" data-aos="fade-up" data-aos-duration="800">
            {
              data.map((element, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="work-box">
                    <div className="work-img" onClick={() => getData(element.ImgLink, element.title, element.subTitle, element.paragraphList)}>
                      <img src={element.ImgLink} title="" alt="protfolio image" />
                    </div>
                    <div className="work-text">
                      <h6>{element.subTitle}</h6>
                      <h4>{element.title}</h4>
                      <div className="btn-bar">
                        <a className="gallery-link" onClick={() => getData(element.ImgLink, element.title, element.subTitle, element.paragraphList)}>
                          <Icon icon="bi:arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {modal === true ? <Modal img={tempData[1]} title={tempData[2]} subTitle={tempData[3]} paraList={tempData[4]} modalClose={modalClose} /> : ""}
    </section>
  )
}

Portfolio.propTypes = {
  data: PropTypes.array
}


export default Portfolio;
