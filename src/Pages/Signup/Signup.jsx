/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './Signup.module.css';
import Localbase from 'localbase';

import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const db = new Localbase('userCred')
  const navigate = useNavigate()

  const createAccount = (event) => {
    event.preventDefault();

    setTimeout(() => {
      db.collection('userCred').add({
        username,
        email,
        password
      })

      alert('Account created...');
      navigate('/dashboard')
    }, 3000)


    setUsername('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className={styles.signup_page}>
      <div className={styles.signup_form_hd}>
        <h3>Create an account.</h3>
      </div>
      <form autoCapitalize='on' autoComplete='off' autoCorrect='on' spellCheck onSubmit={createAccount}>
        <div className={styles.form_wrapper}>
          <div className={styles.form_group}>
            <label htmlFor="username">Username</label>
            <input type="text" value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              placeholder='Username'
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input type="email"
              value={email} onChange={(event) => setEmail(event.target.value)}
              required
              placeholder='Email'
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input type="password"
              value={password} onChange={(event) => setPassword(event.target.value)}
              required
              placeholder='Password'
            />
          </div>
          <div className={styles.form_group}>
            <button>Create account</button>
          </div>
        </div>
      </form>
      <div className={styles.login_link}>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup