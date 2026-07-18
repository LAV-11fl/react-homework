function ActionButtons() {
  const showEpisodesInfo = (event) => {
    event.preventDefault()
    alert('All episodes of Stranger Things are available on Netflix.')
  }
  return (
    <div className="actions">
      <a className="stream" href="https://www.netflix.com" target="_blank" rel="noopener">
        STREAM NOW <i className="fa-solid fa-circle-play"></i>
      </a>
      <a className="episodes" href="#popular" onClick={showEpisodesInfo}>ALL EPISODES</a>
    </div>
  )
}

export default ActionButtons