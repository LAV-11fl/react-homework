import PropTypes from 'prop-types'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import poster1 from '../assets/netflix/poster-1.png'
import poster2 from '../assets/netflix/poster-2.png'
import poster3 from '../assets/netflix/poster-3.png'
import poster4 from '../assets/netflix/poster-4.png'
import poster5 from '../assets/netflix/poster-5.png'

const posters = [
  { image: poster1, title: 'Breaking Bad', url: 'https://www.netflix.com/search?q=Breaking%20Bad' },
  { image: poster2, title: 'The Rain', url: 'https://www.netflix.com/search?q=The%20Rain' },
  { image: poster3, title: 'Life in a Year', url: 'https://www.netflix.com/search?q=Life%20in%20a%20Year' },
  { image: poster4, title: 'Money Heist', url: 'https://www.netflix.com/search?q=Money%20Heist' },
  { image: poster5, title: 'Squid Game', url: 'https://www.netflix.com/search?q=Squid%20Game' },
]

function PopularSlider({ title = 'POPULAR THIS WEEK' }) {
  return (
    <section className="popular" id="popular">
      <div className="popular-head">
        <h2>{title}</h2>
      </div>
      <Swiper
        className="posters"
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={1.3}
        breakpoints={{
          560: { slidesPerView: 2.4 },
          900: { slidesPerView: 4 },
        }}
      >
        {posters.map((poster) => (
          <SwiperSlide key={poster.title}>
            <a href={poster.url} target="_blank" rel="noopener">
              <img src={poster.image} alt={`${poster.title} poster`} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

PopularSlider.propTypes = {
  title: PropTypes.string,
}

export default PopularSlider