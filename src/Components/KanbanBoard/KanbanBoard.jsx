/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import styles from './KanbanBoard.module.css'

const KanbanBoard = ({data}) => {
  console.log(data);

  useEffect(() => {
    console.log('tasks passed to kanban board', data);
  })

  return (
    <div className={styles.kanban_col}>
      <div className={styles.kanban_board_col_name}>
        <p>{data?.name}</p>
      </div>
    </div>
  )
}

export default KanbanBoard