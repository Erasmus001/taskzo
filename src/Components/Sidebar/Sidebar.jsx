import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './Sidebar.module.css'

const Sidebar = () => {
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
      </div>
    </div>
  )
}

export default Sidebar