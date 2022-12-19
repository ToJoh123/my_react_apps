import { useEffect, useState } from 'react'
 import CartCard from '../components/CartCard'





export default function CartList() {
  const [carts, setCarts] = useState([])

  useEffect(() => {
    const getCarts = async () => {
      const res = await fetch('https://fakestoreapi.com/carts')
      const carts = await res.json()
      setCarts(carts)
      console.log(carts)
      console.log(carts[0])
    }

    getCarts()
  }, [])

  return (
    <div className='cart-list'>
      {carts.map((cart) => (
        <CartCard key={cart.id} cart={cart} />
      ))}
    </div>
    

  )
}

