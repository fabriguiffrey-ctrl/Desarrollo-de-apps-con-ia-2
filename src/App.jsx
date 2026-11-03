import { useEffect, useState } from "react"
import { Navbar } from "./Navbar"
import { ProductList } from "./ProductList"
import { CartPanel } from "./CartPanel.jsx"
import "./App.css"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mi-tienda-cart")) ?? []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("mi-tienda-cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const clearCart = () => setCart([])

  return (
    <>
      <header className="site-header">
        <Navbar
          cart={cart}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </header>

      <main className="site-main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="hero-note">Selección de otoño</p>
            <h1 className="hero-title">Piezas que se usan, no se guardan.</h1>
            <p className="hero-lede">
              Ropa, cuero y joyería elegidos de a poco. Mirá el catálogo, sumá
              lo que te guste y armá tu carrito.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#product-list">
                Ver catálogo
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-tile hero-tile--main">
              <span className="hero-emoji">👜</span>
            </div>
            <div className="hero-tile hero-tile--side">
              <span className="hero-emoji">👢</span>
            </div>
            <p className="hero-caption">Nueva temporada</p>
          </div>
        </section>

        <div className="shop-layout">
          <ProductList searchTerm={searchTerm} onAdd={addToCart} />
          <CartPanel cart={cart} onClear={clearCart} />
        </div>
      </main>

      <footer className="site-footer">
        <p className="footer-brand">mi-tienda</p>
        <p>Buenos Aires</p>
        <p>Piezas elegidas a mano</p>
      </footer>
    </>
  )
}

export default App
