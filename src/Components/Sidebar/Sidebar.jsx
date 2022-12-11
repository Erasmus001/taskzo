/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  const [projectLists, setProjectLists] = useState([])
  const navigate = useNavigate()
  const { logout } = useAppContext()

  const handleLogout = () => { 
    logout()
    navigate('/login')
  }

  useEffect(() => {

  }, [])

  const handleNewProject = () => navigate('/new-project')

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h3>Taskzo</h3>
      </div>
      <div className={styles.add_new_project}>
        <button type='button' onClick={handleNewProject}>+ Add New Project</button>
      </div>

      <div className={styles.sidebar_nav}>
        <div className={styles.sidebar_nav_hd}>
          <h3>Projects</h3>
          <p>{projectLists.length}</p>
        </div>
        {/* <hr className={styles.hr} /> */}
        <div className={styles.project_lists}>
          {
            projectLists.map(({ projectName }, index) => (
              <NavLink to='' key={index}>{projectName}</NavLink>
            ))
          }
          {/* <NavLink to=''>Project 1</NavLink>
          <NavLink to=''>Project 3</NavLink>
          <NavLink to=''>Project 4</NavLink>
          <NavLink to=''>Project 4</NavLink>
          <NavLink to=''>Project 4</NavLink> */}
        </div>
      </div>

      <div className={styles.settings}>
        {/* <NavLink to=''>Settings</NavLink> */}
        <button type='button'>Darkmode</button>
        <button type='button' onClick={handleLogout}>Log out</button>
      </div>
    </div>
  )
}

export default Sidebar
