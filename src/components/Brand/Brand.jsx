import PropTypes from 'prop-types';
const Brand = ({ brandLogo }) => {
  return (
    <div className="brand-box">
      <img src={brandLogo} title="" alt="" />
    </div>
  )
}
Brand.propTypes = {
  brandLogo: PropTypes.object
}

export default Brand;
