import React from 'react'
import styles from './DropWrapper.module.css'

const DropWrapper = ({ children }) => {

  return (
    <div className={styles.drop_wrapper} style={{ width: "100%" }}>
      {children}
    </div>
  )
}

export default DropWrapper
