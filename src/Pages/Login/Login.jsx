/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/AppContext';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // ? Referencing the respective inputs...
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const navigate = useNavigate()

  const { login, setIsAuthenticated } = useAppContext()

  // ? Login Functionality
  const loginHandler = (event) => {
    event.preventDefault();

    // * Checking if inputs are valid...
    if (!email) {
      toast.error('Please input your email')
      emailRef.current.focus()
      return;
    } else if (!password) {
      toast.error('Please input your password')
      passwordRef.current.focus()
      return;
    } else {
      setIsLoading(!isLoading)

      setTimeout(() => {
        login(email, password)

        setTimeout(() => {
          const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))

          // * Navigate to the main project dashboard..
          if (isAuthenticated) {
            navigate('/dashboard')
          } else {
            setIsAuthenticated(false)
            setIsLoading(false)
          }
          // * Reset form inputs back to empty boxes...
          setEmail('')
          setPassword('')
        }, 3000)
      }, 4000)
      setIsLoading(!isLoading)
    }
  }
  return (
    <div className={styles.login_page}>
      <div className={styles.login_form_hd}>
        <h3>Log In</h3>
      </div>
      <form autoCapitalize='on' autoComplete='off' autoCorrect='on' spellCheck onSubmit={loginHandler}>
        <div className={styles.form_wrapper}>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input type="email" value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Email'
              ref={emailRef}
              disabled={isLoading && true}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input type="password"
              value={password} onChange={(event) => setPassword(event.target.value)}
              placeholder='Password'
              ref={passwordRef}
              disabled={isLoading && true}
            />
          </div>
          <div className={styles.form_group}>
            <button type='submit' disabled={isLoading && true}>{isLoading ? "Logging in..." : "Login"}</button>
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