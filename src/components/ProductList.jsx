import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ProductList() {
  const { products, addToCart } = useContext(CartContext)

  return (
    <section aria-labelledby="products-title">
      <h2 className="h4 mb-3" id="products-title">Products</h2>
      <div className="row g-3">
        {products.map((product) => (
          <div className="col-md-6 col-xl-4" key={product.id}>
            <article className="card h-100 product-card">
              <div className="card-body d-flex flex-column">
                <h3 className="h5 card-title">{product.name}</h3>
                <p className="card-text text-body-secondary">{product.description}</p>
                <p className="fs-4 fw-bold mt-auto mb-3">${product.price}</p>
                <button className="btn btn-primary" type="button" onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList