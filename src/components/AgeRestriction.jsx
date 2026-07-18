import PropTypes from 'prop-types'

function AgeRestriction({ age = 16 }) {
  return <div className="age"><span></span>{age}+</div>
}

AgeRestriction.propTypes = {
  age: PropTypes.number,
}

export default AgeRestriction
