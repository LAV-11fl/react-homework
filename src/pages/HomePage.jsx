import ActionButtons from '../components/ActionButtons'
import AgeRestriction from '../components/AgeRestriction'
import MovieInfo from '../components/MovieInfo'
import PopularSlider from '../components/PopularSlider'
import Rating from '../components/Rating'

function HomePage() {
  return (
    <>
      <section className="content">
        <MovieInfo
          title="Stranger Things"
          year={2019}
          director="Shawn Levy"
          seasons={3}
          episodes={5}
          genres={['Drama', 'Thriller', 'Supernatural']}
          description="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits."
        />
        <Rating />
        <ActionButtons />
      </section>
      <PopularSlider title="POPULAR THIS WEEK" />
      <AgeRestriction age={16} />
    </>
  )
}

export default HomePage
