import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
// import SearchBar from '../components/SearchBar'

export default function Search() {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		sort('all');
	}, []);


  const sort = async (category) => {
    // Fetch the relevant products from the API
    const res = await fetch(`https://fakestoreapi.com/categories/${category}`);
    const products = await res.json();
    setProducts(products);
    console.log(products);
  
    return (
      <div className="container">
        <div className="search-bar">
          <label for="category">Category:</label>
          <select name="category" id="category" onChange={(e) => sort(e.target.value)}>
            <option value="all">All</option>
            <option value="jewelry">Jewelry</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">women's clothing</option>
            <option value="men's clothing">men's clothing</option>
          </select>
          {/* Only render the product cards for products in the selected category */}
          {products.map((product) => {
            if (product.category === category) {
              return <ProductCard key={product.id} product={product} />;
            }
            return null;
          })}
        </div>
      </div>
    );
  };
}  
