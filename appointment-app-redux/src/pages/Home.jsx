import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doctoraTiklayinca } from '../redux/appAction'
import PatientList from '../components/PatientList'
import AddPatient from '../components/AddPatient'
import {tikla} from '../redux/appAction'


const Home = () => {

  const {doctorlar,tiklayinca}=useSelector((state)=>state.appReducer)
  console.log(doctorlar)
  console.log(tiklayinca);
  const dispatch=useDispatch()


  return (
    <div>
      <header className='header'>
        <h1>HOSPITAL</h1>

        <div className='dr'>
           {doctorlar.map((doctor) => (
            <div onClick={() => {
    dispatch(doctoraTiklayinca(doctor.id));
    dispatch(tikla()); 
}}  key={doctor.id}>
              <img 
              className='btn'
                src={doctor.doctorImg} 
                alt='' 
                width="180px" 
                height="150px" 

                style={{background:"aqua"}}
              />
              <h4 style={{background:"aqua"}}>{doctor.doctorName}</h4>
            </div>
          ))} 
        </div>
      </header>
      {!tiklayinca && <AddPatient/>}
       <PatientList /> 
    </div>
  )
}

export default Home
