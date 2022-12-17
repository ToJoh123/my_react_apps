import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"

export default function SingleUser() { 
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`https://fakestoreapi.com/users/${id}`)
      const user = await res.json()

      setUser(user)
    }

    getUser()
  }, [id])

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <>
      <Link to="/">Back</Link>
      <div>
        <h1>{user.name.firstname} {user.name.lastname}</h1>
        <p>{user.phone}</p>
      </div>
    </>
  )
}