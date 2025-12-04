import React from 'react'

interface User {
  id: number
  name: string
}

const  UsersPage = async () => {
  const users: User[] = await fetch('https://jsonplaceholder.typicode.com/users/', {
    cache: 'no-store'
  }).then(res => res.json());

  return (
    <>
      <h1>Users</h1>
      <div>{new Date().toLocaleTimeString()}</div>
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage