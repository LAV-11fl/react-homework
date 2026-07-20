import ActionButtons from './components/ActionButtons'
import AgeRestriction from './components/AgeRestriction'
import Header from './components/Header'
import MovieInfo from './components/MovieInfo'
import PopularSlider from './components/PopularSlider'
import Rating from './components/Rating'

function App() {
  return (
    <main className="page" id="top">
      <Header date="Friday July 8th" isLoggedIn={true} />
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
        <Rating value={3} />
        <ActionButtons />
      </section>
      <PopularSlider title="POPULAR THIS WEEK" />
      <AgeRestriction age={16} />
    </main>
  )
}

export default App