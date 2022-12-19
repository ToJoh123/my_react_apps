import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"

export default function SingleCart() { 
  const { id } = useParams()
  const [cart, setCart] = useState(null)

  useEffect(() => {
    const getCart = async () => {
      const res = await fetch(`https://fakestoreapi.com/carts/${id}`)
      const cart = await res.json()
        console.log(cart)
      setCart(cart)
    }


    getCart()
  }, [id])



  if (!cart) {
    return <div>Cart not found</div>
  }

  return (
    <>
      <Link to="/cart">Back</Link>
      <div>
        <table>
          <tr>
            <th>ID</th><td>{cart.id}</td>
            <th>UserID</th><td>{cart.userId}</td>
          </tr>
          <tr>
            <th>Date</th><td>{cart.date}</td>
          </tr>
        </table>

        <ul>
          {cart.products.map((product ) => (
              <table>
                <tr>
                <th>Quantity: </th>
                  <td>{product.quantity}</td>
                  <th>Product ID:
                  </th><td><Link to={`/product/${product.productId}`}>{product.productId}</Link></td>
                </tr>
              </table>
          ))}
        </ul>
      </div>
    </>
  )
}