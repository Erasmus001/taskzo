/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Column from '../Column/Column'
import styles from './ColumnWrapper.module.css'
import Modal from '../Modal/Modal'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const ColumnWrapper = () => {
  const db = JSON.parse(localStorage.getItem('db'))
  const kanbanCols = db.projects[0].colums

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Data states
  const [columns, setColumns] = useState(kanbanCols)

  const dragEnd = (results) => {
    if (!results.destination) return;

    const { source, destination } = results

    if (source.droppableId !== destination.droppableId) {
      const sourceColumnIndex = columns.findIndex(e => e.id === source.droppableId)
      const destinationColumnIndex = columns.findIndex(e => e.id === destination.droppableId)

      const sourceColumn = columns[sourceColumnIndex]
      const destinationColumn = columns[destinationColumnIndex]

      const sourceTask = [...sourceColumn.tasks]
      const destinationTask = [...destinationColumn.tasks]

      const [removed] = sourceTask.splice(source.index, 1)
      destinationTask.splice(destination.index, 0, removed)

      columns[sourceColumnIndex].tasks = sourceTask
      columns[destinationColumnIndex].tasks = destinationTask

      setColumns(columns)
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={dragEnd}>
        <div className={styles.column_wrapper}>
          {
            columns.map((column) => (
              <Droppable key={column.id} droppableId={`${column.id}`}>
                {(provided) => (
                  <div {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Column
                      columnData={column}
                      showModal={showModal}
                      setShowModal={setShowModal}
                      provided={provided}
                    />
                  </div>
                )}
              </Droppable>
            ))
          }
          {
            showModal ? (
              <Modal showModal={showModal} setShowModal={setShowModal} />
            ) : null
          }
        </div>
      </DragDropContext>
    </>
  )
}

export default ColumnWrapper
