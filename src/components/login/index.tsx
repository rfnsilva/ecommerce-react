import React, { useState } from 'react'

// import Button from '../button'

import { Container, Form } from './styles'

interface User {
  username: string
  password: string
}

const login: React.FC = () => {
  const [user, setUser] = useState<User>({ username: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target?.value
    })
  }

  const SubmitForm = () => {
    console.log(user)
  }

  return (
    <Container>
      <div className="header">Sign In</div>
      <Form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </Form>
      <button onClick={SubmitForm}>Sign In</button>
      {/* <Button text={'Sign In'} /> */}
    </Container>
  )
}

export default login
