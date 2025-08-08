import React from 'react'

const ContactUs = () => {
    function onSubmit () {
        console.log("Thank You");
    }
  return (
    <div>
        <form className='contactUs' onClick={onSubmit}>
            <h2>Contact Us</h2>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" placeholder="Your name" required />    

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Your email" required /> 

            <label htmlFor="message">Message: </label> 
            <input type="text" id="message" placeholder="Type your message" required />   

            <button  type="submit">Submit </button>       

        </form>
    </div>
  )
}

export default ContactUs