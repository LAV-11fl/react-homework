function PopularSlider() {
  return (
    <section className="popular" id="popular">
      <div className="popular-head">
        <h2>POPULAR THIS WEEK</h2>
        <div className="arrows">
          <button className="arrow" type="button" aria-label="Previous poster">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="arrow" type="button" aria-label="Next poster">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="posters">
        <a href="https://www.netflix.com/search?q=Breaking%20Bad" target="_blank" rel="noopener"><img src="netflix-img/poster-1.png" alt="Breaking Bad poster" /></a>
        <a href="https://www.netflix.com/search?q=The%20Rain" target="_blank" rel="noopener"><img src="netflix-img/poster-2.png" alt="The Rain poster" /></a>
        <a href="https://www.netflix.com/search?q=Life%20in%20a%20Year" target="_blank" rel="noopener"><img src="netflix-img/poster-3.png" alt="Life in a Year poster" /></a>
        <a href="https://www.netflix.com/search?q=Money%20Heist" target="_blank" rel="noopener"><img src="netflix-img/poster-4.png" alt="Money Heist poster" /></a>
        <a href="https://www.netflix.com/search?q=Squid%20Game" target="_blank" rel="noopener"><img src="netflix-img/poster-5.png" alt="Squid Game poster" /></a>
      </div>
    </section>
  )
}

export default PopularSlider