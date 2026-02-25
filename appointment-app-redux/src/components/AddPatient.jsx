import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {post} from '../redux/appAction'
const AddPatient = ({hastalar,setHastalar,doktorlar}) => {
const[hastaAdi,setAd]=useState("")
const[tarih,setTarih]=useState("")
const {doctorlar}=useSelector((state)=>state.appReducer)
const dispatch=useDispatch()






const handleSubmit=(e)=>{
  e.preventDefault()

  dispatch(post({hastaAdi,tarih}))

}


  return (
    <form  onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name"> Patient Information</label>
        <input
          id="name"
          type="text"
          onChange={(e)=>setAd(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor=""> Day & Time</label>
        <input
          type="datetime-local"
       onChange={(e)=>setTarih(e.target.value)}
        />
      </div>

      <div>
        <button className="doc" type="submit">
          <span style={{color:"red"}}>{doctorlar[0].doctorName} </span> için kayıt oluştur
        </button>
      </div>
    </form>
  );
}

export default AddPatient