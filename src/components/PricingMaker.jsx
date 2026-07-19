import { useState } from 'react'
import PricingCard from './PricingCard'

function PricingMaker() {
  const [plans, setPlans] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [users, setUsers] = useState('')
  const [storage, setStorage] = useState('')
  const [emailSupport, setEmailSupport] = useState(false)
  const [helpCenter, setHelpCenter] = useState(false)

  function addPlan(event) {
    event.preventDefault()

    const newPlan = {
      id: Date.now(),
      name,
      price,
      users,
      storage,
      emailSupport,
      helpCenter,
    }

    setPlans((currentPlans) => [...currentPlans, newPlan])
    setName('')
    setPrice('')
    setUsers('')
    setStorage('')
    setEmailSupport(false)
    setHelpCenter(false)
  }

  function deletePlan(planId) {
    setPlans((currentPlans) => currentPlans.filter((plan) => plan.id !== planId))
  }

  return (
    <main className="pricing-page py-5">
      <div className="container">
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold">Pricing Maker</h1>
          <p className="lead text-body-secondary mb-0">Create and manage subscription plans</p>
        </header>

        <form className="pricing-form bg-white border p-4 mb-5" onSubmit={addPlan}>
          <div className="row g-3">
            <div className="col-md-6 col-lg-3">
              <label className="form-label" htmlFor="plan-name">Plan name</label>
              <input className="form-control" id="plan-name" value={name} onChange={(event) => setName(event.target.value)} required />
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="form-label" htmlFor="plan-price">Monthly price</label>
              <input className="form-control" id="plan-price" type="number" min="0" value={price} onChange={(event) => setPrice(event.target.value)} required />
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="form-label" htmlFor="plan-users">Users included</label>
              <input className="form-control" id="plan-users" type="number" min="1" value={users} onChange={(event) => setUsers(event.target.value)} required />
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="form-label" htmlFor="plan-storage">Storage, GB</label>
              <input className="form-control" id="plan-storage" type="number" min="1" value={storage} onChange={(event) => setStorage(event.target.value)} required />
            </div>
            <div className="col-md-6">
              <div className="form-check">
                <input className="form-check-input" id="email-support" type="checkbox" checked={emailSupport} onChange={(event) => setEmailSupport(event.target.checked)} />
                <label className="form-check-label" htmlFor="email-support">Email support</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check">
                <input className="form-check-input" id="help-center" type="checkbox" checked={helpCenter} onChange={(event) => setHelpCenter(event.target.checked)} />
                <label className="form-check-label" htmlFor="help-center">Help center access</label>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-primary px-5" type="submit">Add pricing plan</button>
            </div>
          </div>
        </form>

        {plans.length === 0 ? (
          <p className="empty-message text-center text-body-secondary">No pricing plans yet</p>
        ) : (
          <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" aria-label="Pricing plans">
            {plans.map((plan) => (
              <div className="col" key={plan.id}>
                <PricingCard plan={plan} onDelete={deletePlan} />
              </div>
            ))}
          </section>
        )}
      </div>
    </main>
  )
}

export default PricingMaker