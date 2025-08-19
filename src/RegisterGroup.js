import React, { useState } from 'react'
import axios from 'axios';

const RegisterGroup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    console.log("Button Clicked")
    axios.post('http://localhost:8080/findData', {
        fullname: fullName,
        email:email,
        phone:phone,
        dateOfBirth:dateofBirth,
        gender:gender,
        password:password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
   }
  return (
    <div className="register-container">
    <form className="register-form" >

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
      <label> {email}</label>
    </div>


    {/* -------PHONE NUMBER-------- */}
    <div className="form-group phone-group">
      <label htmlFor="phone">Phone Number:</label>
        <input type="tel" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)} 
        id="phone" placeholder="Enter your phone number"  required />
        <label> {phone}</label>
    </div>



    {/* -------------D O B------------ */}
    <div className="form-group dob-group">
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" 
      value={dateofBirth}
      onChange={(e) => setDateofBirth(e.target.value)}
      id="dob" required />
      <label>{dateofBirth}</label>
    </div>



    {/* -------------GENDER SECTION------------ */}
    <div className="form-group gender-group">
      <h4>Gender:</h4>
      <div className="gender-option">
          <input type="radio"   
          value="Male"
          onChange={(e) => setGender(e.target.value)}
          checked = {gender == "Male"? true: false }
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
  <button onClick={onSubmit}></button>
</div>
  ) 
}

export default RegisterGroup
