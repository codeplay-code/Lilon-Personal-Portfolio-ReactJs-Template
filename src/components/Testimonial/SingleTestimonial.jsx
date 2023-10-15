import PropTypes from 'prop-types';

const Singletestimonial = ({ element }) => {
  return (
    <div className="testimonials-box mb-3">
      <div className="row gy-4">
        <div className="col-sm-7 col-lg-8">
          <div className="t-text">
            <p>“{element.text}”</p>
            <div className="t-lead">
              <h6>- {element.name}</h6>
              <span>{element.designation}</span>
            </div>
          </div>
        </div>
        <div className="col-sm-5 col-lg-4">
          <div className="t-avatar">
            <img src={element.imgLink} title="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

Singletestimonial.propTypes = {
  element: PropTypes.object
}

export default Singletestimonial
