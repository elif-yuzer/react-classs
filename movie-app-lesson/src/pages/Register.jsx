import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import {AuthKontext} from "../context/AuthContext";


const Register = () => {

 const {info,handleRegister,handleChange,handleWithGoogle}=useContext(AuthKontext)
 
const handleSubmit=(e)=>{

  const displayName=`${info.firstName} ${info.lastName}`
  e.preventDefault()
  handleRegister(info,displayName)


}
 
 

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className=" peer "
              placeholder=" "
              required
              value={info.firstName}
              onChange={handleChange}
             
            />
            <label htmlFor="floating_text" className="">
              First Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              placeholder=" "
              name="lastName"
              id="lastName"
              type="text"
              required
              value={info.lastName}
              onChange={handleChange}
             
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              placeholder=" "
              name="email"
              id="email"
              type="email"
              required
             value={info.email}
             onChange={handleChange}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              placeholder=" "
              name="password"
              type="password"
              id="password"
              value={info.password}
              onChange={handleChange}
          
              required
            
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button type="submit" className="btn-danger">
            Register
          </button>
          <button onClick={handleWithGoogle}
            type="button"
            className="btn-danger flex justify-between text-center "
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
