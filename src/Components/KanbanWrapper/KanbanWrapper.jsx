/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import { db } from '../../Context/AppContext'
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import styles from './KanbanWrapper.module.css'

const KanbanWrapper = () => {
  const [kanbanColumns, setKanbanColumns] = useState([])

  const getAllColumns = () => {
    db.collection('projects').doc("projects").get().then((res) => {
      const columns = res.projectList[0].columns
      console.log(columns);
      setKanbanColumns(columns)
    })
  }

  useLayoutEffect(() => {
    getAllColumns()
  }, [])

  return (
    <div className={styles.kanban_wrapper}>
      {
        kanbanColumns?.map((kanbanColumn) => (
          <KanbanColumn data={kanbanColumn} key={kanbanColumn.id} />
        ))
      }
    </div>
  )
}

export default KanbanWrapper