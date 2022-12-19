import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { debounce } from 'lodash';

export default function Search() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ products, setProducts ] = useState([]);
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 500);
    debouncedSearch();
  }, [searchTerm, products]);

  useEffect(() => {
    getCategories('all');
  }, []);

  const getCategories = async (category) => {
    if (category === 'all') {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      setProducts(products);
    } else {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const products = await response.json();
      setProducts(products);
    }
  };

  return (
    <>
      <div className="Search-bar">
        <label htmlFor="Search"></label>
        <input
          type="text"
          name="Search"
          id="Search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => getCategories(e.target.value)}>
          <option value="all">All</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>

      {filteredProducts.length > 0
        ? filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </>
  );
}
