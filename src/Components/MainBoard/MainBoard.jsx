import React from 'react'
import ColumnWrapper from '../ColumWrapper/ColumnWrapper'
import ProjectTitle from '../ProjectTitle/ProjectTitle'
import styles from './MainBoard.module.css'

const MainBoard = () => {
  const db = JSON.parse(localStorage.getItem('db'))
  const title = db.projects[0].projectName;

  return (
    <div className={styles.main_board}>
      <ProjectTitle projectTitle={title} />

      <ColumnWrapper />
    </div>
  )
}

export default MainBoard
