export const CartPanel = ({ cart, onClear }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const units = cart.reduce((sum, item) => sum + item.quantity, 0)

  const money = (value) => `$${(value / 100).toFixed(2)}`

  return (
    <aside id="cart-panel" className="cart-panel" aria-labelledby="cart-title">
      <div className="cart-head">
        <h2 id="cart-title">Tu carrito</h2>
        <span className="cart-count">
          {units} {units === 1 ? "pieza" : "piezas"}
        </span>
      </div>

      {cart.length === 0 ? (
        <>
          <p className="cart-empty">Todavía no elegiste nada.</p>
          <p className="cart-hint">
            Agregá una pieza desde el catálogo y la vas a ver acá.
          </p>
        </>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-emoji" aria-hidden="true">
                  {item.emoji}
                </span>
                <div>
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-meta">
                    {item.quantity} × {money(item.price)}
                  </span>
                </div>
                <span className="cart-item-subtotal">
                  {money(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <span>Total</span>
            <strong>{money(total)}</strong>
          </div>

          <button
            type="button"
            className="button button--clear"
            onClick={onClear}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </aside>
  )
}
