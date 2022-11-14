import React from 'react'
import Header from '../Header/Header'
import styles from './Board.module.css'

const Board = () => {
  return (
    <div className={styles.board}>
      {/* Board Header */}
      <Header />
      {/* Board Canvas */}
    </div>
  )
}

export default Board