import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/product'; // Make sure the case matches the actual filename
import Cart from './pages/Cart';
import { CartContainer } from './Context/CartContext';
import AddProduct from './pages/addProduct';
import { ProductContainer } from './context/ProductContext.jsx';
import Login from './pages/login';
import Orders from './pages/addorder';
import OrderForm from './pages/addorder';
import AddOrder from './pages/addorder';
function App() {
  return (
    <Router>
      <CartContainer>
        <ProductContainer>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="addProduct" element={<AddProduct />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/" element={<Layout />} />
              <Route path="/login" element={<Login />} />

              <Route path="addorder" element={<AddOrder />} />

          </Routes>
        </ProductContainer>
      </CartContainer>
    </Router>
  );
}

export default App;
