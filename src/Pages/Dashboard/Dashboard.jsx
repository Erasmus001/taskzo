/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Dashboard.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
    </div>
  )
}

export default Dashboard