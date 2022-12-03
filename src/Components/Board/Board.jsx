import React from 'react'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import { db } from '../../Context/AppContext'
import BoardActions from '../BoardActions/BoardActions'
import KanbanWrapper from '../KanbanWrapper/KanbanWrapper'
import ProjectTitle from '../ProjectTitle/ProjectTitle'
import styles from './Board.module.css'

const Board = ({ modal }) => {
  const [projectTitle, setProjectTitle] = useState('')

  const getAllColumns = () => {
    db.collection('projects').doc("projects").get().then((res) => {
      console.log(res.projectList[0].columns.title);
      setProjectTitle(res.projectList[0].name)
    })
  }

  useLayoutEffect(() => {
    getAllColumns()
  }, [])
  return (
    <div className={styles.board}>
      <ProjectTitle title={projectTitle} />
      <BoardActions openModal={modal} />
      <KanbanWrapper />
    </div>
  )
}

export default Board