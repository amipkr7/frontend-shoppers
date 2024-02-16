import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react';
const LoginSignup = () => {
  
  const [state,setstate]=useState("Login");
  const [formData,setformData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
  }

  const login=async()=>{
  console.log("Login function executed");
  console.log(formData);

  let responseData;

  await fetch('http://localhost:4000/login',{
    method:'post',
    headers:{
      Accept:'application/form_data',
      'Content-Type':'application/json',
    },
      body:JSON.stringify(formData),
  }).then((response)=> response.json()).then((data)=>responseData=data);
  if(responseData.success==true)
  {
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/");
  }
  else{
    alert(responseData.errors);
  }
  }

  const signup=async()=>{
    console.log("Signup function executed");
    console.log(formData);
    let responseData;

    await fetch('http://localhost:4000/signup',{
      method:'post',
      headers:{
        Accept:'application/form_data',
        'Content-Type':'application/json',
      },
        body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data);
    if(responseData.success==true)
    {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state==="Sign Up" ? <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder="Your Name"/>:<></>}
          <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Email Address' />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
       {state==="Sign Up"? <p className='loginsignup-login'>Allready have an account?<span onClick={()=>{setstate("Login")}}>Login here</span></p>:<></>}
        <p className='loginsignup-login'>Create an account?<span onClick={()=>{setstate("Sign Up")}}>Click Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=" "/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
