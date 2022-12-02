import React from 'react'
import { useAppContext } from '../../../../Context/AppContext'
import styles from '../FormSteps.module.css'

const FormStepOne = ({ step, next, back }) => {
  const { projectName, projectDesc, handleProjectDesc, handleProjectName } = useAppContext()

  const handleubmit = (event) => {
    event.preventDefault()

    next()
  }

  return (
    <div className={styles.form_step}>
      <form autoCapitalize='on' autoComplete='on' autoSave='on' className={styles.form} onSubmit={handleubmit}>
        <div className={styles.form_group}>
          <label htmlFor="project_name">Project Name</label>
          <input type="text"
            name='project_name'
            id='project_name'
            placeholder='Enter project name'
            required
            autoFocus
            value={projectName}
            onChange={handleProjectName}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="project_desc">Project Description</label>
          <textarea
            name='project_desc'
            id='project_desc'
            placeholder='Enter project description...'
            required
            value={projectDesc}
            onChange={handleProjectDesc}
          />
        </div>
        <div className={styles.form_group} id={styles.next_btn}>
          <div className={styles.dual_btns}>
            {
              step === 2 ? (
                <button type='button' onClick={back}>Prev</button>
              ) : null
            }
            <button type='button' onClick={next}>Next</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormStepOne