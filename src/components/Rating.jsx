import PropTypes from 'prop-types'

function Rating({ value = 1 }) {
  let stars

  if (value === 5) {
    stars = (
      <>
        <i className="fa-solid fa-star filled"></i>
        <i className="fa-solid fa-star filled"></i>
        <i className="fa-solid fa-star filled"></i>
        <i className="fa-solid fa-star filled"></i>
        <i className="fa-solid fa-star filled"></i>
      </>
    )
  } else if (value === 3) {
    stars = (
      <>
        <i className="fa-solid fa-star filled"></i>
        <i className="fa-solid fa-star filled"></i>
        <i className="fa-solid fa-star filled"></i>
        <i className="fa-regular fa-star empty"></i>
        <i className="fa-regular fa-star empty"></i>
      </>
    )
  } else {
    stars = (
      <>
        <i className="fa-solid fa-star filled"></i>
        <i className="fa-regular fa-star empty"></i>
        <i className="fa-regular fa-star empty"></i>
        <i className="fa-regular fa-star empty"></i>
        <i className="fa-regular fa-star empty"></i>
      </>
    )
  }

  return <div className="stars" aria-label={`Rating: ${value} of 5`}>{stars}</div>
}

Rating.propTypes = {
  value: PropTypes.number,
}

export default Rating
