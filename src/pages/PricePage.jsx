import PricingCard from '../components/PricingCard'

const netflixPlans = [
  { id: 1, name: 'Free', price: '0', users: '1', storage: '5', emailSupport: false, helpCenter: true },
  { id: 2, name: 'Home', price: '9', users: '3', storage: '50', emailSupport: true, helpCenter: true },
  { id: 3, name: 'Cinema', price: '15', users: '5', storage: '100', emailSupport: true, helpCenter: true },
]

function PricePage() {
  return (
    <section className="route-page netflix-pricing">
      <h1>Choose your plan</h1>
      <p>Simple plans for watching Netflix at home or with friends.</p>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2" aria-label="Netflix plans">
        {netflixPlans.map((plan) => (
          <div className="col" key={plan.id}>
            <PricingCard plan={plan} showDelete={false} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricePage