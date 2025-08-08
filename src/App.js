// import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; 
import JobApplicationForm from './JobApplication';
import ContactUs from './ContactUs';
import RegisterGroup from './RegisterGroup';


function App() {

  const [test, setTest]= useState(false);

  const changeState = ()=>{
    setTest(!test);
  }

  useEffect(() => {
    console.log("The 'test' state has changed:", test);
  }, [test]);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout changeState={changeState} test={test} />}>
          <Route index element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="JobApplicationForm" element={<JobApplicationForm />}/>
          <Route path="ContactUs" element={<ContactUs />}/>
          <Route path="RegisterGroup" element={<RegisterGroup />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
  }

export default App;