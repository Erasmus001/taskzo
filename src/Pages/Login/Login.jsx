/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/AppContext';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  let { currentUser } = useAppContext()

  // ? Login Functionality
  const login = (event) => {
    event.preventDefault();

    currentUser = username

    setTimeout(() => {
      console.log(currentUser);

      navigate('/dashboard')
      setUsername('')
      setPassword('')
    }, 3000)
  }
  return (
    <div className={styles.login_page}>
      <div className={styles.login_form_hd}>
        <h3>Login to your account.</h3>
      </div>
      <form autoCapitalize='on' autoComplete='off' autoCorrect='on' spellCheck onSubmit={login}>
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
            <label htmlFor="password">Password</label>
            <input type="password"
              value={password} onChange={(event) => setPassword(event.target.value)}
              required
              placeholder='Password'
            />
          </div>
          <div className={styles.form_group}>
            <button type='submit'>Login</button>
          </div>
        </div>
      </form>
      <div className={styles.signup_link}>
        <p>Don't have an account? <Link to='/signup'>Create account.</Link></p>
      </div>
    </div>
  )
}

export default Login