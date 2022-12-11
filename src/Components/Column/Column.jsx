import React from 'react'
import styles from './Column.module.css'
import DropWrapper from '../DropWrapper/DropWrapper'
import Task from '../Task/Task'

const Column = ({ columnData, showModal, setShowModal }) => {
  const { tasks, columnName } = columnData
  // const [dragElement, setDragElement] = useState(null)

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={styles.column}>
      <div className={styles.column_hd}>
        <h3>{columnData.columnName}</h3>
        <p>{columnData.tasks.length}</p>
      </div>

      <div className={styles.droppable_column}>
        <div className={styles.add_task}>
          <button type='button' onClick={handleModal}>+ Add {columnName}</button>
        </div>
        <DropWrapper>
          {
            tasks.map((task, index) => (
              <Task taskData={task} key={index} />
            ))
          }
        </DropWrapper>
      </div>
    </div>
  )
}

export default Column
