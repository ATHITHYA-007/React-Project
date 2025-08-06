import React from 'react'

const RegisterGroup = () => {
    function onSubmit () {
        console.log("Thank You");
    }
  return (
    <div className="register-container">
    <form className="register-form" onSubmit={onSubmit}>

    {/*----------HEADER TAG-------- */}
    <h2 className="form-heading">Register</h2> 


    {/*-----------LABEL------------ */}
    <div className="form-group name-group">
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" placeholder="Enter your full name" required />
    </div>

    {/* -------EMAIL SECTION-------- */}
    <div className="form-group email-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email" required />
    </div>


    {/* -------OHONE NUMBER-------- */}
    <div className="form-group phone-group">
      <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" placeholder="Enter your phone number"  required />
    </div>



    {/* -------------D O B------------ */}
    <div className="form-group dob-group">
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" id="dob" required />
    </div>



    {/* -------------GENDER SECTION------------ */}
    <div className="form-group gender-group">
      <h4>Gender:</h4>
      <div className="gender-option">
          <input type="radio" id="male" name="gender" value="male" required />
          <label htmlFor="male">Male</label>
      </div>
      <div className="gender-option">
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
      </div>
      <div className="gender-option">
           <input type="radio" id="other" name="gender" value="other" />
           <label htmlFor="other">Other</label>
      </div>
    </div>

   {/* -------------D O B------------ */}
    <div className="form-group password-group">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="Enter password" required />
    </div>

   {/* --------TERMS & CONDITIONS-------- */}
    <div className="form-group checkbox-group">
      <label>
        <input type="checkbox" required /> I agree to the Terms & Conditions
      </label>
    </div>

   {/* ---------SUBMIT BUTTON------------ */}
    <div className="form-group button-group">
      <button type="submit">Register</button>
    </div>
  </form>
</div>
  ) 
}






export default RegisterGroup