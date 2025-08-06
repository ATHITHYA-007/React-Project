import React from 'react'

const Login = () => {
  return (
    <div>
     <form className='first'>
    <h1>Login</h1>
      <label htmlFor="username">Name: </label>
      <input type="text" id="username" placeholder="Username" required /> 
      <br></br>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" placeholder="Password" required/>
      <br></br>
      <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login