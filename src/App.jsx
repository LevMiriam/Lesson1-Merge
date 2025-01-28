import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './Components/Cart';
import About from './Components/About';
import './App.css';
import ProductList from './Components/ProductsList';

function App() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">
                <div className="cart-icon-container">
                  <img src="../icons/cart1.png" className='cart-icon' alt="Cart" />
                  {cartItems.length > 0 && (
                    <span className="cart-count">{cartItems.length}</span>
                  )}
                </div>
              </Link>
            </li>
          </ul>         
        </nav>
        <div className="product-list-container">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
       