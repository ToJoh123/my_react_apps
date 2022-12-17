//type A

import { Link } from 'react-router-dom'


export default function ProductCard ({ product }) {
	return (
		<div className='product'>
            <div>
                <p>{product.description}</p>
                <h4>
                    {product.rating.count}{' '} people rated this product{' '} {product.rating.rate}{' '} stars
                </h4>
            </div>
            <div>
                <img
					src={product.image !== 'N/A' ? product.image : 'https://via.placeholder.com/400'}
					alt={product.title}
				/>
            </div>
			
			<div >
				<span>{product.title}</span>
				<h3>${product.price}</h3>
				<p>{product.category}</p>
				<button className="btn btn-primary">Add to Cart</button>
				<btn><Link to={`/product/${product.id}`}>Läs mer</Link></btn> 
			</div>
		</div>
	);
};