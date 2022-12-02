/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { categories } from '../../../Localbase/DB'
import styles from './FormModal.module.css'

const FormModal = ({showModal}) => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskPriority, setTaskPriority] = useState('')
  const [taskDueDate, setTaskDueDate] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [taskCategories, setTaskCategories] = useState([])

  useEffect(() => {
    setTaskCategories(categories)
  }, [taskCategories])

  const handleTaskTitle = (event) => setTaskTitle(event.target.value)
  const handleTaskCategory = (event) => setTaskCategory(event.target.value)
  const handleTaskDesc = (event) => setTaskDesc(event.target.value)
  const handleTaskDueDate = (event) => setTaskDueDate(event.target.value)
  const handleTaskPriority = (event) => setTaskPriority(event.target.value)

  // * Create Task...
  const createTaskHandler = (event) => {
    // db.collection('')
    event.preventDefault()

    console.log({
      taskTitle,
      taskCategory,
      taskDueDate,
      taskDesc,
      taskPriority
    });
  }

  return (
    <div className={styles.form_modal} onClick={showModal}>
      <form autoCapitalize='on' 
        autoComplete='on' 
        autoCorrect='on' 
        className={styles.form} 
        onSubmit={createTaskHandler}
      >

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
                <select name="task_category" id="task_category" onChange={handleTaskCategory} required>
                  {
                    taskCategories?.map(({ category, id }) => (
                      <option value={category} key={id}>{category}</option>
                    ))
                  }
                </select>
              </div>
              <div className={styles.form_selects}>
                <label htmlFor="task_priority">Priority</label>
                <select name="task_priority" id="task_priority" onChange={handleTaskPriority} required>
                  <option value='high' defaultValue='todo'>High</option>
                  <option value='medium'>Medium</option>
                  <option value='low'>Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.form_group}>
            <label htmlFor="task_desc">Description</label>
            <input type="text" name="task_desc" id="task_desc" placeholder='Task description' required value={taskDesc} onChange={handleTaskDesc} />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="task_due_date">Due Date</label>
            <input type="date" name="task_due_date" id="task_due_date" placeholder='Task due date' required value={taskDueDate} onChange={handleTaskDueDate} />
          </div>
          <div className={styles.form_group}>
            <button type='submit' className={styles.submit_task}>Create task</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormModal