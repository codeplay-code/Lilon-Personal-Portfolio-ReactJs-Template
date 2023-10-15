import PropTypes from 'prop-types';
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Blog = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (imgLink, title, date, paragraphList) => {
    let tempData = [imgLink, title, date, paragraphList];
    setTempData(element => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }


  return (
    <section id='blog'>
      <div className="section blog-section bg-dark">
        <div className="container">
          <SectionHeading title="Our Latest Update" subTitle="Our Blogs" />
          <div className="row gy-4">
            {
              data.map((element, index) => (
                <div className="col-lg-3 col-sm-6" key={index} onClick={() => getData(element.ImgLink, element.title, element.date, element.paragraphList)} data-aos="fade-left" data-aos-duration="800" data-aos-delay={element.delay ? element.delay : "500"}>
                  <div className="blog-post">
                    <div className="blog-post-img">
                      <a className="px_modal">
                        <img src={element.ImgLink} title="" alt="blog-img" />
                      </a>
                    </div>
                    <div className="blog-post-info">
                      <h6>{element.date}</h6>
                      <h2>
                        <a className="px_modal">
                          {element.title}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {modal === true ? <Modal img={tempData[1]} title={tempData[2]} date={tempData[3]} paraList={tempData[4]} modalClose={modalClose} /> : ""}
    </section>
  )
}

Blog.propTypes = {
  data: PropTypes.array
}

export default Blog;
