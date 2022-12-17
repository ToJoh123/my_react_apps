import { Link } from 'react-router-dom'

export default function UserCard({ user }) { 
  return (
    <li>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <Link to={`/user/${user.id}`}>Läs mer</Link>
    </li>
  )
}