import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'

export default function Search() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getCategories('all');
  }, []);

  const getCategories = async (category) => {
    if (category === 'all') {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      setProducts(products);
      console.log(products);
    } else {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const products = await response.json();
      setProducts(products);
      console.log(products);
    }
  }

  return (
    <div>
      <h1>Search</h1>
      <select onChange={(e) => getCategories(e.target.value)}>
        <option value="all">All</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
      {products.map(product =>
        <ProductCard key={product.id} product={product} />
      )}
    </div>
  );
}
