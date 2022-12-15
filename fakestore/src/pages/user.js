import { useParams } from 'react-router-dom'

const users = [
  { 
    id: "1",
    name: 'Jonas'
  },
  {
    id: "2",
    name: 'Charles'
  },
  {
    id: "3",
    name: 'Bernard'
  }
]  

export default function User() {
  const { id } = useParams()

  const user = users.find((item) => { 
    return item.id === id
  })

  if (!user) { 
    return <p>User not found</p>
  }

  return (
    <h1>{ user.name }</h1>
  )
}