import '../assets/css/NavBar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className='nav-container'>
      <img className='brand-logo' src='/img/logo-brand.svg' alt='Sophia Intelligence'/>

      <NavLink className="texto-menu" to="/">Home</NavLink>

      <div className='dropdown'>
        <span className='texto-menu'>Productos</span>
        <div className='dropdown-menu'>
          <NavLink to="/category/Todos" className="dropdown-item">Todos</NavLink>
          <NavLink to="/category/Controladoras" className="dropdown-item">Controladoras</NavLink>
          <NavLink to="/category/Servidores" className="dropdown-item">Servidores</NavLink>
          <NavLink to="/category/Repetidores" className="dropdown-item">Repetidores</NavLink>
          <NavLink to="/category/Smart-Led" className="dropdown-item">Smart Led</NavLink>
          <NavLink to="/category/Controladores-perisfericos" className="dropdown-item">Controladores Perisféricos</NavLink>
          <NavLink to="/category/Smart-Touch" className="dropdown-item">Smart Touch</NavLink>
          <NavLink to="/category/Modulos-Extensores" className="dropdown-item">Modulos Extensores</NavLink>
          <NavLink to="/category/Smart-Locks" className="dropdown-item">Smart Locks</NavLink>
          <NavLink to="/category/Smart-Roof" className="dropdown-item">Smart Roof</NavLink>
        </div>
      </div>

      <div className='cart-widget'>
        <CartWidget/>
      </div>
    </nav>
  );
}

export default NavBar;
