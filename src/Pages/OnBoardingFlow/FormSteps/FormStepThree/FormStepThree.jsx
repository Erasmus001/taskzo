import React from 'react'
import { toast } from 'react-hot-toast'
import styles from '../FormSteps.module.css'

const FormStepThree = ({ step, back }) => {
  const finishForm = () => toast.success('Form completed...')
  return (
    <div className={styles.form_step}>
      <form autoCapitalize='on' autoComplete='on' autoSave='on' className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="project_name">Project Name</label>
          <input type="text"
            name='project_name'
            id='project_name'
            placeholder='Enter project name'
            required
            autoFocus
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="project_desc">Project Description</label>
          <textarea
            name='project_desc'
            id='project_desc'
            placeholder='Enter project description...'
            required
          />
        </div>
        <div className={styles.form_group} id={styles.next_btn}>
          <div className={styles.dual_btns}>
            {
              step === 2 || step === 3 ? (
                <button type='button' onClick={back}>Prev</button>
              ) : null
            }
            {
              step === 3 ? <button type='button' onClick={finishForm}>Finish</button> : null
            }
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormStepThree