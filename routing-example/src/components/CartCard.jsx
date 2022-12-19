//type A

import { Link } from 'react-router-dom';


export default function CartCart({ cart }) {
	return (
		<div className="card">
			<table>
				<tr>
					<th>ID</th><td><Link to={`/cart/${cart.id}`}>{cart.id}</Link></td>
					<th>UserID</th><td>{cart.userId}</td>
					</tr>
					<tr>
					<th>Date</th><td>{cart.date}</td>
				</tr>
				{cart.products.map((product) => (
					<tr key={product.productId}>
						<th>Product ID: </th><td>{product.productId}</td>
						<th>Quantity: </th>
						<td>{product.quantity}</td>
					</tr>
				))}
				
			</table>
		</div>
	);
}
/*går det att använda av datan från fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

			för att skapa en bättre vy på produkterna i carten?
			
	*/		