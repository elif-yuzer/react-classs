import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRouter = () => {
    const {email}=useSelector((state)=>state.yetkiSlice)
    console.log(email);
  
  return email==="elif"? (
    <Outlet/>

  ):(
    <Navigate to ="/login"/>
  )
  
  
}

export default PrivateRouter