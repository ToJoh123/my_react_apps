import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import ProductCard from '../components/ProductCard'

export default function SingleProduct() { 
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const product = await res.json()

      setProduct(product)
    }

    getProduct()
  }, [id])

  if (!product) {
    return <div>User not found</div>
  }

  return (
    <>
      <ProductCard product={product} />
    </>
  )
}