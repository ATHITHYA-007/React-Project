import React, { useState } from 'react'

const RegisterGroup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    // e.preventDefault(); // Prevents page reload
    console.log("Thank You");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("DateofBirth:", dateofBirth);
    console.log("Gender:", gender);
    console.log("Password:", password);
  }
  return (
    <div className="register-container">
    <form className="register-form" onSubmit={onSubmit}>

    {/*----------HEADER TAG-------- */}
    <h2 className="form-heading">Register</h2> 


    {/*-----------LABEL------------ */}
    <div className="form-group name-group">
      <label htmlFor="name">Full Name:</label>
      <input type="text" value={fullName}
      onChange={(e)=>setFullName(e.target.value)}
       id="name" placeholder="Enter your full name" required />
       <label> {fullName}</label>
    </div>


    {/* -------EMAIL SECTION-------- */}
    <div className="form-group email-group">
      <label htmlFor="email">Email:</label>
      <input type="email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      id="email"  placeholder="Enter your email" required />
    </div>


    {/* -------PHONE NUMBER-------- */}
    <div className="form-group phone-group">
      <label htmlFor="phone">Phone Number:</label>
        <input type="tel" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)} 
        id="phone" placeholder="Enter your phone number"  required />
    </div>



    {/* -------------D O B------------ */}
    <div className="form-group dob-group">
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" 
      value={dateofBirth}
      onChange={(e) => setDateofBirth(e.target.value)}
      id="dob" required />
    </div>



    {/* -------------GENDER SECTION------------ */}
    <div className="form-group gender-group">
      <h4>Gender:</h4>
      <div className="gender-option">
          <input type="radio"   
          value="Male"
          onChange={(e) => setGender(e.target.value)}
          id="male" name="gender" required />
          <label htmlFor="male">Male</label>
      </div>
      <div className="gender-option">
          <input type="radio" 
          value="female"
          onChange={(e) => setGender(e.target.value)}
          id="female" name="gender"  />
          <label htmlFor="female">Female</label>
      </div>
      <div className="gender-option">
           <input type="radio" 
           value="other"
           onChange={(e) => setGender(e.target.value)}
           id="other" name="gender"  />
           <label htmlFor="other">Other</label>
      </div>
    </div>

   {/* -------------PASSWORD------------ */}
    <div className="form-group password-group">
      <label htmlFor="password">Password:</label>
      <input type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      id="password" placeholder="Enter password" required />
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