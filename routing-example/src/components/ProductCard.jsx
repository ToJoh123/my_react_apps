import { Link, useLocation } from 'react-router-dom'

const ProductCardLink = ({ product }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  let linkPath;
  if (currentPath === '/product/' + product.id) {
    linkPath = '/product/';
  } else {
    linkPath = '/product/' + product.id;
  }

  let linkText;
  if (currentPath.includes('/product/' + product.id  )) {
    linkText = 'tillbaka';
  } else {
    linkText = 'Läs mer';
  }

  return (
    <Link to={linkPath}>{linkText}</Link>
  );
}

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

      <div>
        <span>{product.title}</span>
        <h3>${product.price}</h3>
        <p>{product.category}</p>
        <button className="btn btn-primary">Add to Cart</button>
        <ProductCardLink product={product} />
      </div>
    </div>
  );
};
