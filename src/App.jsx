import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Error from './components/Error';
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from './components/CartView';
import { CartProvider } from '../context/CartContext';
import Checkout from './components/CheckOut';

function App() { 

  return (
    <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    </CartProvider>
  );
}

export default App;
