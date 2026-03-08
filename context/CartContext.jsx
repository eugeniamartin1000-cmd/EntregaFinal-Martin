import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);


  const addItem = (item, qty) => {
    const exists = cart.find((prod) => prod.id === item.id);
    if (exists) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + qty }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };


  const removeItem = (id) => setCart(cart.filter((prod) => prod.id !== id));


  const clear = () => setCart([]);


  const total = () =>
    cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);


  const cartQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);


  const incrementItem = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };


  const decrementItem = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        total,
        cartQuantity,
        incrementItem,
        decrementItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
