/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import styles from './Signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAppContext } from '../../Context/AppContext';

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // ? Referencing the respective inputs...
  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const navigate = useNavigate()
  const { register } = useAppContext()

  const createAccount = (event) => {
    event.preventDefault();

    // * Checking if inputs are valid...
    if (!username) {
      toast.error('Please input your username')
      usernameRef.current.focus()
      return;
    } else if (!email) {
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
        register(username, email, password)
        toast.success('Registration Successful');

        setTimeout(() => {
          // * Navigate to the main project dashboard..
          navigate('/onboard')

          // * Reset form inputs back to empty boxes...
          setUsername('')
          setEmail('')
          setPassword('')
        }, 3000)
      }, 4000)
      setIsLoading(!isLoading)
    }
  }

  return (
    <div className={styles.signup_page}>
      <div className={styles.signup_form_hd}>
        <h3>Get Started For Free.</h3>
      </div>
      <form autoCapitalize='on' autoComplete='off' autoCorrect='on' spellCheck onSubmit={createAccount}>
        <div className={styles.form_wrapper}>
          <div className={styles.form_group}>
            <label htmlFor="username">Username</label>
            <input type="text" value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder='Username'
              ref={usernameRef}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input type="email"
              value={email} onChange={(event) => setEmail(event.target.value)}
              placeholder='Email'
              ref={emailRef}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input type="password"
              value={password} onChange={(event) => setPassword(event.target.value)}
              placeholder='Password'
              ref={passwordRef}
            />
          </div>
          <div className={styles.form_group}>
            <button disabled={isLoading ? true : false}>{isLoading ? 'Creating account...' : 'Create account'}</button>
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