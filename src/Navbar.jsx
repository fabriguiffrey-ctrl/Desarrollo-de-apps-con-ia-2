export const Navbar = ({ cart, searchTerm, onSearchChange }) => {
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="navbar" aria-label="Principal">
      <a className="brand" href="#top">
        mi-tienda
      </a>

      <div className="nav-search">
        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="6" />
          <path d="m16 16 4 4" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          placeholder="Buscar producto..."
          aria-label="Buscar producto"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <a className="nav-cart" href="#cart-panel">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M6 8h12l1 12H5L6 8Z" strokeLinejoin="round" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
        </svg>
        <span className="visually-hidden">Carrito:</span>
        <span className="cart-badge">{totalUnits}</span>
      </a>
    </nav>
  )
}
