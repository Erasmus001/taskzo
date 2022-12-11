import React from 'react'
import styles from './DropWrapper.module.css'

const DropWrapper = ({ onDrop, children, category }) => {
  const allowDrop = event => event.preventDefault();

  const handleDrop = (event) => {
    const data = JSON.parse(event.dataTransfer.getData('item'))
    onDrop(data, category);
  }
  return (
    <div onDragOver={allowDrop} onDrop={handleDrop} className={styles.drop_wrapper} style={{ height: "100%" }}>
      {children}
    </div>
  )
}

export default DropWrapper
