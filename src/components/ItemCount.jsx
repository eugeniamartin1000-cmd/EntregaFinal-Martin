import { useState } from 'react';
import '../assets/css/ItemCount.css';


const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
const sumItems = () => {
  if (count < stock) {
    setCount(count + 1);
  }
};


const substractItems = () => {
  if (count > 1) {
    setCount(count - 1);
  }
};


const addToCart = () => {

  onAdd(count);
};




  return (
    <div className='item-container'>
      <div className="item-count">
        <button className='btn-substact' onClick={substractItems} disabled={count <= 1}><img className='sum-add' src='/img/minus.svg' alt='restar'/></button>
        <span className="counter">{count}</span>
        <button className='btn-add' onClick={sumItems} disabled={count >= stock}><img className='sum-add' src='/img/plus.svg'/></button>
      </div>


      <button className='btn-primary-addcart' onClick={ () => onAdd(count)} disabled={count === 0}>
        <img className='cart-icon' src='/img/add-cart.svg' alt='Añadir a carrito'/>
      </button>
    </div>
  );
};


export default ItemCount