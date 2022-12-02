/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import FormStepOne from './FormSteps/FormStepOne/FormStepOne'
import FormStepThree from './FormSteps/FormStepThree/FormStepThree'
import FormStepTwo from './FormSteps/FormStepTwo/FormStepTwo'
import styles from './OnboardingFlow.module.css'

const OnboardingFlow = () => {
  const [page, setPage] = useState(1)

  // * Go to the next form
  const nextPage = () => {
    if (page < 1) {
      return
    } else {
      setPage(page + 1)
    }
  }

  // * Go to the previous form
  const goBack = () => {
    if (page > 1 || page > 2) {
      setPage(page - 1)
    }
  }

  return (
    <div className={styles.on_boarding_flow}>
      {/* Left Banner */}
      <div className={styles.banner}></div>

      {/* Form Wrapper */}
      <div className={styles.onboarding_form}>
        <div className={styles.onboarding_hd}>
          <div>
            <h3>Create your project.</h3>
            <p>{page}/3</p>
          </div>
          <p>Complete the following forms to create your project and start tracking.</p>
        </div>

        {/* Form Steps */}
        <div className={styles.form_steps}>
          {
            page === 1 ? <FormStepOne step={page} next={nextPage} /> : page === 2 ? <FormStepTwo step={page} next={nextPage} back={goBack} /> : <FormStepThree step={page} next={nextPage} back={goBack} />
          }
        </div>
      </div>
    </div>
  )
}

export default OnboardingFlow