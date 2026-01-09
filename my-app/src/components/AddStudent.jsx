import React, { useState } from 'react'
import { useOrtakCarpan } from '../context/StudentProvider'
import EditStudent from './EditStudent'

const AddStudent=()=>{
  const {students,postStudent}=useOrtakCarpan()

  const [ekle,setEkle]=useState({
  name:"",
  branch:"",
  grade:"",
  isCompleted:""
})


  

const handleChange=(e)=>{


  setEkle({...ekle , [e.target.name]:e.target.value})
 

 
}
const handleSubmit=(e)=>{

  e.preventDefault()

  postStudent(ekle)
  setEkle("")
}
  return (
   
    <div className='max-w-md mx-auto container'>
    <form onSubmit={handleSubmit}>
       <input  className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 transition-colors "
       type="text " required onChange={handleChange} name='name' value={ekle.name} />
       <input  className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 transition-colors "
       type="text " required onChange={handleChange} name='branch' value={ekle.branch} />


      <input className='w-full border-b-2 border-gray-300 focus:border-indigo-600  outline-none transition-colors py-2' type="number " required min="0" max="100"  onChange={handleChange} name='grade' value={ekle.grade}  />
      <button className='mt-6 w-full bg-indigo-600 text-white py-3 rounded-2xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95 '>ekle</button>
    </form>
    
    </div>
  )
}

export default AddStudent