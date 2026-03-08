import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../assets/css/CartView.css";

const CartView = () => {
  const { cart, removeItem, clear, total, incrementItem, decrementItem } = useContext(CartContext);


  return (
    <div className="cart-container">
      <h1>
        Tu carrito 
        <img src="/img/empty-cart.svg" className="cart-icon" alt="Carrito"/>
      </h1>

      {cart.length === 0 ? (
        <div className="carrito-vacio">
          <img src="/img/empty-cart.svg" alt="Carrito vacío"/>
          <p>El carrito está vacío</p>
          <Link className="btn btn-dark" to="/">Volver a home</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((compra) => (
              <div key={compra.id} className="cart-item">
                <img src={compra.img} alt={compra.name} className="cart-img"/>
                <div className="info">
                 <span className="name">{compra.name}</span>   
                 <span className="description">{compra.description}</span>
                 <span className="price">${compra.price}</span>
                 <div className="item-count">
                  <button className="btn-substact" onClick={() => decrementItem(compra.id)}>-</button>
                  <span className="counter">{compra.quantity}</span>
                  <button className="btn-add" onClick={() => incrementItem(compra.id)}>+</button>
                 </div>
                 <span className="subtotal">
                  Subtotal: ${compra.price * compra.quantity}
                </span>
                </div>
                <button 
                  className="eliminar" 
                  onClick={() => removeItem(compra.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total a pagar: ${total()}</h3>
            <div className="cart-actions">
              <button className="btn btn-warning" onClick={clear}>
                Vaciar carrito
              </button>
              <Link className="btn btn-success" to="/checkout">
                Terminar compra
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
