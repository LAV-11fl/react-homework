import ActionButtons from './components/ActionButtons'
import AgeRestriction from './components/AgeRestriction'
import Header from './components/Header'
import MovieInfo from './components/MovieInfo'
import PopularSlider from './components/PopularSlider'
import Rating from './components/Rating'

function App() {
  return (
    <main className="page" id="top">
      {/* Основні блоки Netflix-сторінки */}
      <Header />
      <section className="content">
        <MovieInfo />
        <Rating />
        <ActionButtons />
      </section>
      <PopularSlider />
      <AgeRestriction />
    </main>
  )
}

export default App