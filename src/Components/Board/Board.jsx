import React from 'react'
import BoardCanvas from '../BoardCanvas/BoardCanvas'
import BoardLists from '../BoardLists/BoardLists'
import Header from '../Header/Header'
import styles from './Board.module.css'

const Board = () => {
  return (
    <div className={styles.board}>
      {/* Board Header */}
      <Header />
      {/* Board Canvas */}
      <BoardCanvas />

      {/* Kanban Board Lists */}
      <BoardLists />
    </div>
  )
}

export default Board