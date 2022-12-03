import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext'
import Logo from '../Logo/Logo'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  const { logout } = useAppContext()
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout()
    navigate('/login')
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>

      <nav className={styles.nav}>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='projects'>Projects</NavLink>
        <NavLink to='/calender'>Calender</NavLink>
      </nav>

      <div className={styles.settings}>
        <NavLink to='/settings'>Settings</NavLink>
        <button type='button' onClick={logoutHandler} className={styles.logout}>Log out</button>
      </div>
    </div>
  )
}

export default Sidebar