import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'

export default function UserList() { 
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => { 
      const res = await fetch('https://fakestoreapi.com/users')
      const users = await res.json()
      setUsers(users)
      console.log(users)
    }

    getUsers()
  }, [])

  return (
    <ul>
      {users.map(user =>
        <UserCard key={user.id} user={user} />
      )}
    </ul>
  )
}
