import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Rating({ value = 0 }) {
  const [rating, setRating] = useState(value)

  function selectRating(selectedValue) {
    setRating((currentRating) => currentRating === selectedValue ? 0 : selectedValue)
  }

  return (
    <div className="stars" aria-label={`Rating: ${rating} of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          className="star-button"
          type="button"
          key={star}
          aria-label={`Set rating ${star} of 5`}
          onClick={() => selectRating(star)}
        >
          <FontAwesomeIcon
            icon={star <= rating ? faStar : regularStar}
            className={star <= rating ? 'filled' : 'empty'}
          />
        </button>
      ))}
    </div>
  )
}

Rating.propTypes = {
  value: PropTypes.number,
}

export default Rating