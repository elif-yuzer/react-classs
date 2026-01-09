import React from 'react'
import StudentList from '../components/StudentList'
import AddStudent from '../components/AddStudent'
import EditStudent from '../components/EditStudent'


const Home = () => {
  return (
   <>
    <StudentList/>
    <AddStudent/>
    <EditStudent/>
   </>
  )
}

export default Home