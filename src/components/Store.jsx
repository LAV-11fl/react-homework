import Cart from './Cart'
import ProductList from './ProductList'

function Store() {
  return (
    <main className="store-page py-5">
      <div className="container">
        <div className="row g-4 align-items-start mb-5">
          <header className="col-lg-7">
            <p className="text-primary fw-semibold mb-2">React Context Store</p>
            <h1 className="display-5 fw-bold mb-2">Choose your tech</h1>
            <p className="lead text-body-secondary mb-0">Add products and manage your shopping cart.</p>
          </header>
          <div className="col-lg-5"><Cart /></div>
        </div>
        <ProductList />
      </div>
    </main>
  )
}

export default Store