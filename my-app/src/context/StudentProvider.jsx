import React, { createContext } from 'react'
import axios from 'axios'
import { useContext,useState ,useEffect} from 'react'


export const StudentContext=createContext()

const StudentProvider = ({children}) => {
  const [students,setStudents]=useState([])
  const [editStudent,setEditStudent]=useState({})
  const [showModal,setShowModal]=useState(false)
const url ="https://6989f83cc04d974bc6a0fb7e.mockapi.io/edutrack/students"

const getVeri=async()=>{
 const res= await axios.get(url)
  console.log(res.data);
  setStudents(res.data)
  console.log(res.data.length);
}

const deleteStudent=async(id)=>{
 await axios.delete(`${url}/${id}`)
  getVeri()
}
const postStudent=async(yeniStudent)=>{

  await axios.post(url ,yeniStudent) 
  getVeri()

}

const putStudent=async(editItem)=>{
  await axios.put(`${url}/${editItem.id}`, editItem)
  getVeri()
  closeModal()
}


const handleModal=(student)=>{
  setEditStudent(student)
  setShowModal(true)
  
}

const closeModal=()=>{
  setShowModal(false)
 
}



 


useEffect(()=>{
  getVeri()


},[])
  return (
    <StudentContext.Provider value={{getVeri,students,deleteStudent,postStudent,handleModal,closeModal,editStudent,showModal,putStudent}}>
      {children}
    </StudentContext.Provider>
  )
}

export default StudentProvider


export const useOrtakCarpan=()=>{
  return useContext(StudentContext)
}