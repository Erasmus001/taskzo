/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './KanbanColumn.module.css'
import Task from '../Task/Task'

const KanbanColumn = ({ data }) => {
  const { id, name, tasks } = data

  // const dragOver = (event) => {
  //   event.preventDefault();
  //   console.log('Drag Over');
  // }

  // const dragEnter = () => {
  //   console.log('Drag Enter');
  // }

  // const dragLeave = () => {
  //   console.log('Drag Leave');
  // }

  // const drop = () => {
  //   console.log('Drop');
  // }

  return (
    <div className={styles.kanban_col}
      // onDragOver={dragOver}
      // onDragEnter={dragEnter}
      // onDragLeave={dragLeave}
      // onDrop={drop}
    >
      <div className={styles.kanban_col_hd}>
        <h3>{name}</h3>
        <p>{tasks.length}</p>
      </div>
      <div className={styles.task_lists}>
        {
          tasks?.map((task) => (
            <Task task={task} key={task.taskId} />
          ))
        }
      </div>
    </div>
  )
}

export default KanbanColumn