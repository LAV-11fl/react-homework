import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ActionButtons() {
  const showEpisodesInfo = (event) => {
    event.preventDefault()
    alert('All episodes of Stranger Things are available on Netflix.')
  }

  return (
    <div className="actions">
      <a className="stream" href="https://www.netflix.com" target="_blank" rel="noopener">
        STREAM NOW <FontAwesomeIcon icon={faCirclePlay} />
      </a>
      <a className="episodes" href="#popular" onClick={showEpisodesInfo}>ALL EPISODES</a>
    </div>
  )
}

export default ActionButtons