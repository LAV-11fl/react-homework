import PropTypes from 'prop-types'

function PricingCard({ plan, onDelete }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-header py-3 text-center">
        <h2 className="h4 mb-0">{plan.name}</h2>
      </div>
      <div className="card-body d-flex flex-column text-center">
        <p className="display-6 fw-bold mb-3">
          ${plan.price}<span className="fs-6 fw-normal text-body-secondary">/mo</span>
        </p>
        <ul className="list-unstyled mb-4">
          <li>{plan.users} users included</li>
          <li>{plan.storage} GB of storage</li>
          <li>{plan.emailSupport ? 'Email support' : 'No email support'}</li>
          <li>{plan.helpCenter ? 'Help center access' : 'No help center access'}</li>
        </ul>
        <button className="btn btn-outline-danger mt-auto" type="button" onClick={() => onDelete(plan.id)}>
          Delete plan
        </button>
      </div>
    </article>
  )
}

PricingCard.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    users: PropTypes.string.isRequired,
    storage: PropTypes.string.isRequired,
    emailSupport: PropTypes.bool.isRequired,
    helpCenter: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default PricingCard