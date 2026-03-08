import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import '../assets/css/ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ detail }) => {
  const { addItem } = useContext(CartContext)

  const onAdd = (cantidad) => {
    addItem(detail, cantidad)
  }

  return (
    <div className="item-detail-container">
      <Link to="/" className="back">
        <img src="/img/back-arrow.svg" alt="Atrás" />
        Volver
      </Link>

      <div className="item-detail-content">
        <img src={detail.img} alt={detail.name} />
        <p className='name'>{detail.name}</p>
        <p className="title">{detail.description}</p>
        <p className="price">${detail.price},00</p>
        <p className="stock">Stock disponible: {detail.stock} unidades</p>
        <ItemCount stock={detail.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail
