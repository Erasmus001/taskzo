/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast';
import styles from './Modal.module.css'

const Modal = ({ showModal, setShowModal }) => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [taskTag, setTaskTag] = useState('')
  const [taskDueDate, setTaskDueDate] = useState('')
  const [taskCategory, setTaskCategory] = useState('')

  const handleTaskTitle = (event) => setTaskTitle(event.target.value)
  const handleTaskDesc = (event) => setTaskDesc(event.target.value)
  const handleTaskTag = (event) => setTaskTag(event.target.value)
  const handleTaskCategory = (event) => setTaskCategory(event.target.value)
  const handleTaskDueDate = (event) => setTaskDueDate(event.target.value)

  const taskTitleRef = useRef(null)
  const taskDescRef = useRef(null)
  const taskCategoryRef = useRef(null)
  const taskTagRef = useRef(null)
  const taskDueDateRef = useRef(null)

  const db = JSON.parse(localStorage.getItem('db'))

  const handleSubmit = (event) => {
    // event.prevenDefault();

    // * Validate inputs...
    if (!taskTitle) {
      toast.error('Please input a title')
      taskTitleRef.current.focus()
      return;
    } else if (!taskDesc) {
      toast.error('Please input a description')
      taskDescRef.current.focus()
      return;
    } else if (!taskTag) {
      toast.error('Please select a tag')
      taskTagRef.current.focus()
      return;
    } else if (!taskCategory) {
      toast.error('Please select a category')
      taskCategoryRef.current.focus()
      return;
    } else if (!taskDueDate) {
      toast.error('Please select a due date')
      taskDueDateRef.current.focus()
      return;
    } else {
      // * Todo
      if (taskCategory === 'todo') {
        const tasks = db.projects[0].colums[0].tasks;
        if (tasks < 1) {
          db.projects[0].colums[0].tasks.push({
            id: Math.floor(Math.random() * 1000).toString(),
            taskTitle, taskDesc, taskCategory, taskDueDate, taskTag
          })
        } else {
          db.projects[0].colums[0].tasks.push({
            id: Math.floor(Math.random() * 1000).toString(),
            taskTitle, taskDesc, taskCategory, taskDueDate, taskTag
          })
        }
      } else if (taskCategory === 'in-progress') {
        const tasks = db.projects[0].colums[1].tasks;
        if (tasks < 1) {
          db.projects[0].colums[1].tasks.push({
            id: Math.floor(Math.random() * 1000).toString(),
            taskTitle, taskDesc, taskCategory, taskDueDate, taskTag
          })
        } else {
          db.projects[0].colums[1].tasks.push({
            id: Math.floor(Math.random() * 1000).toString(),
            taskTitle, taskDesc, taskCategory, taskDueDate, taskTag
          })
        }
      } else if (taskCategory === 'stuck') {
        const tasks = db.projects[0].colums[2].tasks;
        if (tasks < 1) {
          db.projects[0].colums[2].tasks.push({
            id: Math.floor(Math.random() * 1000).toString(),
            taskTitle, taskDesc, taskCategory, taskDueDate, taskTag
          })
        } else {
          db.projects[0].colums[2].tasks.push({
            id: Math.floor(Math.random() * 1000).toString(),
            taskTitle, taskDesc, taskCategory, taskDueDate, taskTag
          })
        }
      } else if (taskCategory === 'completed') {
        const tasks = db.projects[0].colums[3].tasks;
        if (tasks < 1) {
          db.projects[0].colums[3].tasks.push({
            id: Math.floor(Math.random() * 1000).toString(),
            taskTitle, taskDesc, taskCategory, taskDueDate, taskTag
          })
        } else {
          db.projects[0].colums[3].tasks.push({
            id: Math.floor(Math.random() * 1000).toString(),
            taskTitle, taskDesc, taskCategory, taskDueDate, taskTag
          })
        }
      }
    }

    console.log(db);

    localStorage.setItem('db', JSON.stringify(db))

    toast.success('Task added')
    setTimeout(() => {
      setShowModal(!showModal);
    }, 1000)

    window.location.reload();
  }

  return (
    <div className={styles.modal}>
      <form className={styles.form} autoCapitalize='on' autoComplete='on' onSubmit={handleSubmit}>
        <div className={styles.modal_form_hd}>
          <h3>Create New Task</h3>
        </div>
        <div className={styles.form_inputs_container}>
          <div className={styles.form_group}>
            <label htmlFor="title">Title</label>
            <input type="text"
              id='title'
              name='task_title'
              placeholder='Task title'
              minLength={15}
              maxLength={30}
              value={taskTitle}
              onChange={handleTaskTitle}
              ref={taskTitleRef}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="desc">Description</label>
            <textarea type="text"
              id='desc'
              name='task_desc'
              placeholder='Description'
              rows={4}
              minLength={30}
              maxLength={150}
              value={taskDesc}
              onChange={handleTaskDesc}
              ref={taskDescRef}
            />
          </div>
          <div id={styles.flex_group}>
            <div className={styles.form_group}>
              <label htmlFor="category">Category</label>
              <select
                name="task_category"
                id="category"
                className={styles.select}
                value={taskCategory}
                onChange={handleTaskCategory}
                ref={taskCategoryRef}
              >
                <option value="" disabled defaultValue>Category</option>
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="stuck">Stuck</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className={styles.form_group}>
              <label htmlFor="tag">Priority</label>
              <select
                name="task_tag"
                id="tag"
                className={styles.select}
                value={taskTag} onChange={handleTaskTag}
                ref={taskTagRef}
              >
                <option value="" disabled defaultValue>Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className={styles.form_group}>
              <label htmlFor="due">Due Date</label>
              <input
                type="date"
                id='due'
                name='task_due-date'
                className={styles.due_date}
                value={taskDueDate}
                onChange={handleTaskDueDate}
                ref={taskDueDateRef}
              />
            </div>
          </div>
          <div className={styles.form_group}>
            <button type='button' onClick={handleSubmit}>Create task</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Modal
