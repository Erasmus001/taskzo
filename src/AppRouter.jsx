/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import NewProject from './Pages/NewProject/NewProject';
import Signup from './Pages/Signup/Signup';
import SplashScreen from './Pages/SplashScreen/SplashScreen';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new-project' element={<NewProject />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter;