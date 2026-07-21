import Store from './components/Store'
import CartProvider from './context/CartProvider'

function App() {
  return (
    <CartProvider>
      <Store />
    </CartProvider>
  )
}

export default App