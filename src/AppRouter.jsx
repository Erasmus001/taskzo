import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import OnboardingFlow from './Pages/OnBoardingFlow/OnboardingFlow';
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
          <Route path='/onboard' element={<OnboardingFlow />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter;