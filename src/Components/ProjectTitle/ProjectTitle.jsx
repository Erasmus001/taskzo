import React from 'react'
import styles from './ProjectTitle.module.css'

const ProjectTitle = ({ title }) => {
  return (
    <div className={styles.projectTitle}>
      <h3>{title}</h3>
    </div>
  )
}

export default ProjectTitle