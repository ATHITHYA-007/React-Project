import React from 'react'


const JobApplicationForm = () => {

    return (
    <div>
    <form className="job-form" action="/submit-job-application" method="POST" >
    
        <h2>Job Application Form</h2>

        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" required/>
      
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required/>

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required/>

          <label htmlFor="experience">Years of Experience:</label>
          <input type="number" id="experience" name="experience" min="0" required/>

          <label htmlFor="skills">Skills:</label>
          <input type="text" id="skills" name="skills" placeholder="e.g., Java, React, SQL" required/>

          <label htmlFor="resume">Upload Resume (PDF):</label>
          <input type="file" id="resume" name="resume" accept=".pdf" required/>

          <button type="submit">Submit Application</button>
    </form>

    </div>
    )
}

export default JobApplicationForm;
