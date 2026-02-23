import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthKontext } from "../context/AuthContext";

const Login = () => {
  const {handleSignIn,handleWithGoogle,handleResetPass}=useContext(AuthKontext)
  const [infologin, setInfoLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfoLogin((onceki) => ({
      ...onceki,
      [name]: value,
    }));
  };

const handleSubmit=(e)=>{
  e.preventDefault()
  handleSignIn(infologin)
  
  

}


  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign In
          </h2>

          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              placeholder=" "
              name="email"
              id="email"
              type="email"
              required
              onChange={handleChange}
              value={infologin.email}
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
              value={infologin.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="floating_password">Password</label>
          </div>
            <div className="flex justify-between">
            <span
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
           onClick={()=>handleResetPass(infologin.email)}
            >
              Forgot Password
            </span>
          
          </div>
          <button type="submit" className="btn-danger">
            Sign In
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

export default Login;
