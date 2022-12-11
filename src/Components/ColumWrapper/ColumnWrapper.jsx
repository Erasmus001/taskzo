/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Column from '../Column/Column'
import styles from './ColumnWrapper.module.css'
import { toast } from 'react-hot-toast'
import Modal from '../Modal/Modal'

const ColumnWrapper = () => {
  const db = JSON.parse(localStorage.getItem('db'))

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Data states
  const [items, setItems] = useState([])
  const [columns, setColumns] = useState(db.projects[0].colums)
  return (
    <>
      <div className={styles.column_wrapper}>
        {
          columns.map((column) => (
            <Column
              columnData={column}
              key={column.id}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ))
        }
        {
          showModal ? (
            <Modal showModal={showModal} setShowModal={setShowModal} />
          ) : null
        }
      </div>
    </>
  )
}

export default ColumnWrapper
