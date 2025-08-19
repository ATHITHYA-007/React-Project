
import React from 'react'

const Register = () => {
  function onSubmit(){
    console.log("Submitted");

  }
  return (
      <div>
      <form className="Reg2" onSubmit={onSubmit}>
        <h2>Register</h2>

      
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name"placeholder="Enter full name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter email"required />

        <label  htmlFor="phone">Phone Number:</label>
        <input  type="tel" id="phone" placeholder="Enter phone number" pattern="[0-9]{10}" required />

        <label  htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" required />

      <div className="form-section">
          <h4>Gender:</h4>

          <div className="gender-row">
            <input type="radio" id="male" name="gender" value="male" required />
            <label htmlFor="male">Male</label>
          </div>

          <div className="gender-row">
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>

          <div className="gender-row">
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        
        <label htmlFor="password">Password:</label>
        <input type="password"  id="password"  placeholder="Enter password" required />

        <label htmlFor="confirm">Confirm Password:</label>
        <input type="password" id="confirm" placeholder="Re-enter password" required/>

        <div className="checkbox-sec">
          <label>
            <input type="checkbox" required /> I agree to the Terms & Conditions
          </label>
        </div>

        
        <button>Register</button>

  </form>
      </div>
    )
}

export default Register