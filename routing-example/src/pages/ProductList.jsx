import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'


export default function UserList() { 
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => { 
      const res = await fetch('https://fakestoreapi.com/products')
      const products = await res.json()
      setProducts(products)
    }

    getProducts()
  }, [])

  return (
    <div className='container'>
      {products.map(product =>
        <ProductCard key={product.id} product={product} />
      )}
   </div>
  )
}
