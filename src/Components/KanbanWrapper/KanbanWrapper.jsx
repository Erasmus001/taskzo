/* eslint-disable no-unused-vars */
import React from 'react'
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import styles from './KanbanWrapper.module.css'
import Categories from '../../Localbase/DB'

const KanbanWrapper = () => {
  return (
    <div className={styles.kanban_wrapper}>
      {/* {
        Categories?.map((userTask) => (
          <KanbanColumn data={userTask} key={userTask.id} />
        ))
      } */}
    </div>
  )
}

export default KanbanWrapper