import React, { useState } from 'react'
import axios from 'axios';


const Login = () => {
  const [fullname,setfullname] = useState("");
  const [password,setpassword] = useState("");
  

  function onSubmit(e){
    console.log("Yes!")
    axios.get('http://localhost:8080/login', {
      params: {
        fullname: fullname,
        password: password
    }
    })
  .then(function (response) {
    console.log(response);
    if(response.data===true){
      alert("Login Successful")
    } else {
      alert("Oops!, Incorrect Credentials")
    }
  })
  .catch(function (error) {
    console.log(error);
  })

}

  return (
    <div>
     <form className='first' >
    <h1>Login</h1>
      <label htmlFor="username">Name: </label>
      <input type="text" 
      value={fullname}
      onChange={(e)=>setfullname(e.target.value)}
      id="username" placeholder="Username" required /> 
      <br></br>
      <label htmlFor="password">Password: </label>
      <input type="password" 
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      id="password" placeholder="Password" required/>
      <br></br>
    </form>
      <button onClick={onSubmit} type="submit">Login</button>

    </div>
  )
}

export default Login