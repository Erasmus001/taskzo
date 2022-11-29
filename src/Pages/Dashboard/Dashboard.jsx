/* eslint-disable no-unused-vars */
import React from 'react'
import Board from '../../Components/Board/Board'
import FormModal from '../../Components/Modal/FormModal/FormModal'
import Sidebar from '../../Components/Sidebar/Sidebar'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <Sidebar />
      {/* Board */}
      <Board />
      <FormModal />
    </div>
  )
}

export default Dashboard