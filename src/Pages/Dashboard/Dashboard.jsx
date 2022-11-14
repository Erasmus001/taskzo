import React from 'react'
import styles from './Dashboard.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Board from '../../Components/Board/Board'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <Board />
    </div>
  )
}

export default Dashboard