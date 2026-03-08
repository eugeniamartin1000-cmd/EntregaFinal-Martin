import Item from './Item'
import '../assets/css/ItemList.css'

const ItemList = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="product-card">
        <p>No hay productos disponibles en esta categoría.</p>
      </div>
    )
  }

  return (
    <div className="product-card">
      {data.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  )
}

export default ItemList
