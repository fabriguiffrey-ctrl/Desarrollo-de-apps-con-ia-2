const ProductCard = ({ product, onAdd }) => {
  return (
    <article className="product-card">
      <div className="product-media" aria-hidden="true">
        <span className="product-emoji">{product.emoji}</span>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">
          ${(product.price / 100).toFixed(2)}
        </p>
        <button
          type="button"
          className="button button--add"
          onClick={() => onAdd(product)}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          Agregar
        </button>
      </div>
    </article>
  )
}

export default ProductCard
