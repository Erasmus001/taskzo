/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Task.module.css'

const Task = ({ task }) => {
  const { taskId, taskCategory, taskTitle, taskDesc } = task
  return (
    <div className={`${styles.task} ${styles.task_grabbing}}`}
      draggable
      id={taskId}
    >
      {/* Task Tags */}
      <div className={styles.tags}>
        <div className={styles.tag}>
          <span className={`${taskCategory} === 'High' ? ${styles.high} : 
          ${taskCategory} === 'Low' : ${styles.low}`}>{taskCategory}</span>
        </div>
      </div>

      <div className={styles.task_info}>
        {/* Task Title */}
        <div className={styles.task_title}>
          <h3>{taskTitle}</h3>
        </div>
        {/* Task desc */}
        <div className={styles.desc}>
          <p>{taskDesc}</p>
        </div>
        {/* Lists of sub_tasks */}
      </div>

      {/* Due date */}
    </div>
  )
}

export default Task