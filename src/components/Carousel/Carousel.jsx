import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Singletestimonial from '../Testimonial/SingleTestimonial';
import "slick-carousel/slick/slick.css";
import Brand from '../Brand/Brand';



const Carousel = ({ data }) => {
  const { useFor, info, settings } = data;
  if (useFor === "testimonial") {
    return (
      <Slider {...settings}>
        {
          info.map((element, index) => (
            <Singletestimonial element={element} key={index} />
          ))
        }
      </Slider>
    )
  } else if (useFor === "brand") {
    return (
      <Slider {...settings}>
        {
          info.map((element, index) => (
            <Brand key={index} brandLogo={element.imgLink} />
          ))
        }
      </Slider>
    )
  }
}

Carousel.propTypes = {
  data: PropTypes.object
}


export default Carousel
