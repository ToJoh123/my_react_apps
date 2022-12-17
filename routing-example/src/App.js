import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserList from './pages/UserList';
import SingleUser from './pages/SingleUser';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import './App.css';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <ul>
      <li><Link to = "/"> Home</Link> </li>
      <li><Link to="/product">Product List</Link></li>
      <li> <Link to="/user">User List</Link></li>
      </ul>
      <Routes>
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/:id" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;