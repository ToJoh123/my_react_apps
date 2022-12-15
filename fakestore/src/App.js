import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

import './App.css';
// save the urls in a variable and use it in the fetch
const API_URL = 'https://fakestoreapi.com/products';

function App() {
	const [ products, setProducts ] = useState([]); //use state hook

	const fetchProducts = async () => {
		try {
			const response = await fetch(API_URL);
			const data = await response.json();
			setProducts(data);
			//for each loop that prints out all the different categories
			// data.forEach((product) => {
			// 	console.log(product.category);
			// });
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	//useEffect hook
	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="app">
			<h1>Products</h1>
			<div className="search">
				<input type="text" placeholder="Search for a product" />
				<img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search" />
				<label for="category">Category:</label>
				<select name="category" id="category">
					<option value="all">All</option>
					<option value="jewelry">Jewelry</option>
					<option value="electronics">Electronics</option>
					<option value="women's clothing">women's clothing</option>
				</select>
			</div>

			{products.length > 0 ? (
				<div className="container">{products.map((product) => <ProductCard product={product} />)}</div>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
export default App;
