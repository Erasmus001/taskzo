/* eslint-disable no-unused-vars */
import React from 'react'
import MainBoard from '../../Components/MainBoard/MainBoard'
import Sidebar from '../../Components/Sidebar/Sidebar'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Board */}
      <MainBoard />
    </div>
  )
}

export default Dashboard