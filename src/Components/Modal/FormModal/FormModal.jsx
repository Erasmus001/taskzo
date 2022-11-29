/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Localbase from 'localbase'
import { categories } from '../../../Localbase/DB'
import styles from './FormModal.module.css'

export const db = new Localbase('kanbanDB')

const FormModal = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [taskCategories, setTaskCategories] = useState([])

  useEffect(() => {
    setTaskCategories(categories)
  }, [taskCategories])

  const handleTaskTitle = (event) => setTaskTitle(event.target.value)
  const handleTaskCategory = (event) => setTaskCategory(event.target.value)
  const handleTaskDesc = (event) => setTaskDesc(event.target.value)

  return (
    <div className={styles.form_modal}>
      <form autoCapitalize='on' autoComplete='on' autoCorrect='on' className={styles.form}>
        <div className={styles.form_hd}>
          <h3>Add Task</h3>
        </div>

        {/* Form Inputs */}
        <div className={styles.form_inputs}>
          <div className={styles.form_group}>
            <label htmlFor="task_title">Title</label>
            <input type="text" name="task_title" id="task_title" placeholder='Task title' required value={taskTitle} onChange={handleTaskTitle} />
          </div>
          <div className={styles.form_group} >
            <div id={styles.select_div}>
              <div className={styles.form_selects}>
                <label htmlFor="task_category">Category</label>
                <select name="task_category" id="task_category" onChange={handleTaskCategory}>
                  {
                    taskCategories?.map(({ category, id }) => (
                      <option value={category} key={id}>{category}</option>
                    ))
                  }
                </select>
              </div>
              <div className={styles.form_selects}>
                <label htmlFor="task_priority">Priority</label>
                <select name="task_priority" id="task_priority" onChange={handleTaskCategory}>
                  <option value='high' defaultValue='todo'>High</option>
                  <option value='medium'>Medium</option>
                  <option value='low'>Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.form_group}>
            <label htmlFor="task_title">Description</label>
            <input type="text" name="task_title" id="task_title" placeholder='Task title' required value={taskDesc} onChange={handleTaskDesc} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormModal