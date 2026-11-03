import { useState } from "react"
import { products } from "./datos"
import ProductCard from "./ProductCard"
import { Filtros } from "./Filtros"

export const ProductList = ({ searchTerm, onAdd }) => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const categories = [...new Set(products.map((product) => product.category))]

  const filtered = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="product-list">
      <div className="section-head">
        <h2>Catálogo</h2>
        <p className="section-count">
          {filtered.length} de {products.length} piezas
        </p>
      </div>
      <Filtros
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="product-grid">
        {filtered.length === 0 && (
          <p className="cart-hint">
            No encontramos piezas con ese filtro. Probá con otra categoría o
            borrá la búsqueda.
          </p>
        )}
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}