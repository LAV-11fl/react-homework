import { useState } from 'react'
import PropTypes from 'prop-types'
import { CartContext } from './CartContext'

const products = [
  { id: 1, name: 'Wireless Headphones', description: 'Comfortable headphones for everyday use.', price: 79 },
  { id: 2, name: 'Smart Watch', description: 'Track activity and receive notifications.', price: 129 },
  { id: 3, name: 'Portable Speaker', description: 'Compact speaker with clear sound.', price: 59 },
]

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addToCart(product) {
    setCartItems((items) => [...items, { ...product, cartId: crypto.randomUUID() }])
  }

  function removeFromCart(cartId) {
    setCartItems((items) => items.filter((item) => item.cartId !== cartId))
  }

  return (
    <CartContext.Provider value={{ products, cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CartProvider