/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useRef } from 'react'
import Board from '../../Components/Board/Board'
import FormModal from '../../Components/Modal/FormModal/FormModal'
import Sidebar from '../../Components/Sidebar/Sidebar'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false)
  const modaRef = useRef(null)

  // ? Function to toggle modal visibility...
  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const closeModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <Sidebar />
      {/* Board */}
      <Board modal={handleShowModal} />
      {
        showModal && <FormModal showModal={handleShowModal} closeModal={closeModal} />
      }
    </div>
  )
}

export default Dashboard