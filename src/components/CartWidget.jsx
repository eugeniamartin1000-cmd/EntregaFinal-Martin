import React, { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../assets/css/CartWidget.css";
import { Badge } from "react-bootstrap";


const CartWidget = () => {
  const { cart, cartQuantity, removeItem } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);


 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };


    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="cart-widget" ref={dropdownRef}>
      <div className="cart-icon" onClick={() => setOpen(!open)}>
        <img src="/img/icon-cart.svg" alt="Carrito" />
        {cartQuantity > 0 && (
          <Badge bg="primary" pill className="cart-badge">
            {cartQuantity}
          </Badge>
        )}
      </div>


      {open && (
        <div className="cart-dropdown">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <img src="/img/empty-cart.svg" className="empty-icon" alt="Carrito Vacio"/>
              <p className="title">Tu carrito está vacío</p>
              <p className="subtitle">Podrás visualizar aquí tus productos agregados al carrito</p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} className="cart-item-img"/>
                  <div className="cart-item-info">
                    <span className="name">{item.name}</span>
                    <span className="quantity">{item.quantity} x ${item.price}</span>
                  </div>
                  <button className='remove-item' onClick={() => removeItem(item.id)}><img src="/img/remove-item.svg" alt="Eliminar Item"/></button>
                </div>
              ))}
              <Link to="/cart" className="btn btn-primary">
                Ir al carrito
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};


export default CartWidget;