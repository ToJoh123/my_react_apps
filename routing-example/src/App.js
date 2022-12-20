import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserList from './pages/UserList';
import SingleUser from './pages/SingleUser';
// import CreateProduct from './pages/CreateProduct'; broken
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import './App.css';
import CartList from './pages/CartList';
import SingleCart from './pages/SingleCart';
import Search from './pages/Search';
function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <ul className='menu'>
      <li><Link to = "/"> Home</Link> </li>
      {/* <li><Link to="/product/create">Create Product</Link></li> */}
      <li><Link to="/product">Product List</Link></li>
      <li> <Link to="/user">User List</Link></li>
      <li> <Link to="/cart">Cart List</Link></li>
      <li> <Link to="/search">Search</Link></li>
      </ul>
      <Routes>
        <Route path="/product" element={<ProductList />} />
        {/* <Route path="/product/create" element={<CreateProduct />} /> */}
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/:id" element={<SingleUser />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/cart/:id" element={<SingleCart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;