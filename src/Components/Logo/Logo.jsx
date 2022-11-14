import React from 'react'
import styles from './Logo.module.css'
import BrandLogo from '../../assets/logo/png/logo-transparent.png'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={BrandLogo} alt="logo" className={styles.logo_img} loading='lazy' />
    </div>
  )
}

export default Logo