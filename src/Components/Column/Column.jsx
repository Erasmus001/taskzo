import React from 'react'
import styles from './Column.module.css'
import DropWrapper from '../DropWrapper/DropWrapper'
import Task from '../Task/Task'
import { Draggable } from 'react-beautiful-dnd'

const Column = ({ columnData, showModal, setShowModal, provided }) => {
  const { tasks, columnName } = columnData

  const handleModal = () => {
    setShowModal(!showModal)
  }


  return (
    <div className={styles.column} {...provided.droppableProps} ref={provided.innerRef} style={{ height: "100%" }}>
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
              <div style={{ width: "100%" }} key={task.id}>
                <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? "0.9" : '1',
                        backgroundColor: 'transparent',
                        boxShadow: snapshot.isDragging ? "1px 2px 15px rgba(0,0,0,0.4)" : null
                      }}
                    >
                      <Task taskData={task} />
                    </div>
                  )}
                </Draggable>
              </div>
            ))
          }
          {provided.placeholder}
        </DropWrapper>
      </div>
    </div>
  )
}

export default Column
