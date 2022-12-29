import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Pictures from './pages/Pictures';
import SinglePicture from './pages/SinglePicture';
// import './App.scss';
import { GlobalStyles } from './GlobalStyles';


// import UserList from './pages/UserList';
// import SingleUser from './pages/SingleUser';
// // import CreateProduct from './pages/CreateProduct'; broken
// import ProductList from './pages/ProductList';
// import SingleProduct from './pages/SingleProduct';
// import './App.css';
// import CartList from './pages/CartList';
// import SingleCart from './pages/SingleCart';
// import Search from './pages/Search';
function App() {
  return (
    <div className="app">
      <GlobalStyles />
    <BrowserRouter>
      <nav className='menu'>
      <li><Link to = "/"> Home</Link> </li>
      <li><Link to="/pictures">Pictures</Link></li>
      </nav>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/pictures/:id" element={<SinglePicture />} />
        {/* <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/:id" element={<SingleUser />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/cart/:id" element={<SingleCart />} />
        <Route path="/search" element={<Search />} /> */}
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;