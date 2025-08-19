import React, { useEffect, useState, } from 'react'
import axios from 'axios';

function RegisterTable() {

  const [fullname, setFullname] = useState([]);

    useEffect(() => {
      fetchApi();
}, []);

function fetchApi(){
    axios.get('http://localhost:8080/fetchAll')
  .then(function (response) {
    console.log(response);
    setFullname(response.data)
  })

  .catch(function (error) {
    console.log(error);
  })
  
}

  return (
    <div>
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }} cellPadding="8">
      <thead>
        <tr>
          <th>FullName</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {fullname.map((row, index) => (
          <tr key={index}>
            <td>{row.fullname}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.dateOfBirth}</td>
            <td>{row.gender}</td>
            <td>{row.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default RegisterTable
