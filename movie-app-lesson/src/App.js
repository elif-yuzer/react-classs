import React from 'react'
import AppRouter from "../src/router/AppRouter"
import { ToastContainer } from 'react-toastify';
import AuthContext from './context/AuthContext';
import { DivideIcon } from '@heroicons/react/24/outline';
import MovieContext from './context/MovieContext';



const App = () => {
  return (
    <div className='dark:bg-[#23242a]'>
      <AuthContext>
        <MovieContext>
        <AppRouter/>
        <ToastContainer />
        </MovieContext>
      
      </AuthContext>
    </div>
  );
}

export default App