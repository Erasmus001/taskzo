import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { db, useAppContext } from '../../Context/AppContext'
import Logo from '../Logo/Logo'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  const [projectLists, setProjectLists] = useState([])

  const { logout } = useAppContext()
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout()
    navigate('/login')
  }

  useEffect(() => {
    db.collection('projects').doc("projects").get().then((res) => {
      console.log(res.projectList);
      setProjectLists(res.projectList)
    }).catch((err) => console.log(err))
  }, [])

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
        <hr />
        {/* Project lists */}
        {
          projectLists.map((project) => (
            <NavLink to={project.id} key={project.id}>{project.name}</NavLink>
          ))
        }
      </nav>

      <div className={styles.settings}>
        <NavLink to='/settings'>Settings</NavLink>
        <button type='button' onClick={logoutHandler} className={styles.logout}>Log out</button>
      </div>
    </div>
  )
}

export default Sidebar