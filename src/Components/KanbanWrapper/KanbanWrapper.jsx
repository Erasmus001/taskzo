/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import styles from './KanbanWrapper.module.css'

const KanbanWrapper = () => {
  const [kanbanColumns, setKanbanColumns] = useState([])
  return (
    <div className={styles.kanban_wrapper}>
      {
        kanbanColumns?.tasks?.map((kanbanColumn) => (
          <KanbanColumn data={kanbanColumn} key={kanbanColumn} />
        ))
      }
    </div>
  )
}

export default KanbanWrapper