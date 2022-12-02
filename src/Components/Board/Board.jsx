import React from 'react'
import BoardActions from '../BoardActions/BoardActions'
import KanbanWrapper from '../KanbanWrapper/KanbanWrapper'
import ProjectTitle from '../ProjectTitle/ProjectTitle'
import styles from './Board.module.css'

const Board = ({modal}) => {
  return (
    <div className={styles.board}>
      <ProjectTitle title='Project One'/>
      <BoardActions />
      <KanbanWrapper />
    </div>
  )
}

export default Board