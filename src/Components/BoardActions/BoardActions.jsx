import React from 'react'
import styles from './BoardActions.module.css'

const BoardActions = ({ openModal }) => {
  const createTask = () => {
    openModal()
  }
  return (
    <div className={styles.board_actions}>
      {/* Sort */}
      <div className={styles.sort}>
        <select name="sort" id="sort" className={styles.select}>
          <option value="none" defaultValue='none' disabled>None</option>
          <option value="date_created">Date Created</option>
          <option value="category">Category</option>
        </select>
      </div>

      <div className={styles.add_task_btn}>
        <button type='button' onClick={createTask}>Add Task</button>
      </div>
    </div>
  )
}

export default BoardActions