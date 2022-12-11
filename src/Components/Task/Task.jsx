/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Task.module.css'

const Task = ({ taskData }) => {

  const { id, taskTitle, taskDesc, taskCategory, taskTag, taskDueDate } = taskData;

  return (
    <div
      className={styles.task}
      id={id}

    >
      <div className={styles.task_tag}>
        <p
          style={{
            color: taskTag === 'high' ? "rgb(205, 4, 4)" : taskTag === "medium" ? "rgb(199, 209, 3)" : "rgb(0, 207, 17)"
          }}
        >{taskTag}</p>
        <div className={styles.moreBtn}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <p>{taskCategory}</p> */}
      </div>
      <div className={styles.task_title}>
        <h4>{taskTitle}</h4>
      </div>
      <div className={styles.task_desc}>
        <p>{taskDesc}</p>
      </div>
      <div className={styles.task_due_date}>
        <p>{taskDueDate}</p>
      </div>
    </div>
  )
}

export default Task
