import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";
import { socialData } from "../../data.json";

const Modal = ({ img, title, date, subTitle, paraList, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,.6)',
    backdropFilter: "saturate(180%) blur(8px)",
    display: "block"
  };
  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="px-modal">
        <button className="position-absolute top-0 end-0 text-white border-0 bg-transparent" onClick={modalClose}> <Icon icon="ic:round-close" /></button>
        <div className="single-blog-box">
          <div className="single-blog-img">
            <img src={img} title="" alt="" />
          </div>
          <div className="single-blog-content">
            {date && <h6>{date}</h6>}
            {subTitle && <h5>{subTitle}</h5>}
            <h2>{title}</h2>
            {paraList && paraList.map((element, index) => (
              <p key={index}>{element.text}</p>
            ))
            }
            <div className="blog-meta">
              <label>Share</label>
              <ul className="nav social-link">
                {socialData.map((element, index) => (
                  <li key={index}>
                    <a href={element.link}>
                      <Icon icon={`bi:${element.icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  date: PropTypes.string,
  paraList: PropTypes.array,
  modalClose: PropTypes.func,
}

export default Modal;