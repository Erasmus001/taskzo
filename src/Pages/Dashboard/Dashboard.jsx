/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Board from '../../Components/Board/Board'
import FormModal from '../../Components/Modal/FormModal/FormModal'
import Sidebar from '../../Components/Sidebar/Sidebar'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false)

  // ? Function to toggle modal visibility...
  const handleShowModal = () => {
    setShowModal((prev) => !prev)
  }
  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <Sidebar />
      {/* Board */}
      <Board modal={handleShowModal} />
      {
        showModal && <FormModal showModal={handleShowModal} />
      }
    </div>
  )
}

export default Dashboard