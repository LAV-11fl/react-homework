import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext)
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <aside className="cart-panel" aria-labelledby="cart-title">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0" id="cart-title">Shopping cart</h2>
        <span className="badge text-bg-primary">{cartItems.length}</span>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-body-secondary mb-0">Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group list-group-flush mb-3">
            {cartItems.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center gap-3" key={item.cartId}>
                <span>{item.name} <strong>${item.price}</strong></span>
                <button className="btn btn-sm btn-outline-danger" type="button" onClick={() => removeFromCart(item.cartId)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="fs-5 fw-bold text-end mb-0">Total: ${total}</p>
        </>
      )}
    </aside>
  )
}

export default Cart