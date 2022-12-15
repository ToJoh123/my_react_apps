import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home'
import User from './pages/User'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;