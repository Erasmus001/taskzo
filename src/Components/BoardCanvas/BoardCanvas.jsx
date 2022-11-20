/* eslint-disable no-unused-vars */
import React from 'react'
import BoardLists from '../BoardLists/BoardLists'
import BoardTitle from '../BoardTitle/BoardTitle'
import styles from './BoardCanvas.module.css'

const BoardCanvas = () => {
  return (
    <div className={styles.board_canvas}>
      <BoardTitle />
      {/* <BoardLists /> */}
    </div>
  )
}

export default BoardCanvas