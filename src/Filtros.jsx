export const Filtros = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="filtros" role="group" aria-label="Filtrar por categoría">
      <button
        type="button"
        className={selectedCategory === "" ? "chip active" : "chip"}
        aria-pressed={selectedCategory === ""}
        onClick={() => onSelectCategory("")}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          className={selectedCategory === category ? "chip active" : "chip"}
          aria-pressed={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
