/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Splashscreen.module.css'

const SplashScreen = () => {
  const [initialLaunch, setInitialLaunch] = useState(false)
  const navigate = useNavigate()
  const isLoggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
  const user = JSON.parse(localStorage.getItem('user'))

  const checkState = () => {
    // * Check localstorage if there is an initial launch present..
    const isFirstLaunch = JSON.parse(localStorage.getItem('initialLaunch'))

    // * If there is no `isFirstLaunch`, then save the initialLaunch state to localstorage...
    if (!isFirstLaunch) {
      localStorage.setItem('initialLaunch', JSON.stringify(!initialLaunch))
      setInitialLaunch(!initialLaunch)
    } else {
      // * Mimic the async functionality
      setTimeout(() => {
        if (isLoggedIn) {
          navigate('/dashboard')
        } else if (user || !isLoggedIn) {
          navigate('/login')
        }
        else {
          navigate('/signup')
        }
      }, 3000)
    }
  }

  useEffect(() => {
    checkState()
  })

  return (
    <div className={styles.splashscreen}>
      <div className={styles.logo}>
        <h2>Taskzo</h2>
      </div>
    </div>
  )
}

export default SplashScreen