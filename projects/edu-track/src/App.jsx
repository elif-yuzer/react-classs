import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import StudentProvider from './context/StudentProvider'



const App = () => {
  
  return (
    <StudentProvider>
    <Home/>
    </StudentProvider>
  )
}

export default App