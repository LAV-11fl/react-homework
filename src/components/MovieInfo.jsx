import PropTypes from 'prop-types'

function MovieInfo({
  title = 'Stranger Things',
  year = 2019,
  director = 'Shawn Levy',
  seasons = 3,
  episodes = 5,
  description = 'No description',
}) {
  return (
    <>
      <p className="genres">Drama <span></span> Thriller <span></span> Supernatural</p>
      <h1>{title}</h1>
      <p className="details">
        <b>{year}</b> <span></span> <b>DIRECTOR:</b> {director} <span></span>{' '}
        <b>seasons:</b> {seasons} ({episodes} Episodes)
      </p>
      <p className="description">{description}</p>
    </>
  )
}

MovieInfo.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  director: PropTypes.string,
  seasons: PropTypes.number,
  episodes: PropTypes.number,
  description: PropTypes.string,
}

export default MovieInfo
