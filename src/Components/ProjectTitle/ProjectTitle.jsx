import React from 'react'
import styles from './ProjectTitle.module.css'

const ProjectTitle = ({ projectTitle }) => {
  return (
    <div className={styles.project_title}>
      <h3>{projectTitle}</h3>
    </div>
  )
}

export default ProjectTitle
