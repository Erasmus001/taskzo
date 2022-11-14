import React, { useState } from 'react'
import UserProfileCard from '../UserProfileCard/UserProfileCard'
import styles from './Header.module.css'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const searchProject = (e) => {
    e.preventDefault()

    alert(searchQuery)
    console.log(searchQuery);
    setSearchQuery('')
  }
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <form className={styles.search_form} onSubmit={searchProject}>
          <input type="search"
            className={styles.search_input}
            name="search"
            id="searchInput"
            placeholder='Search your projects...'
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      <div className={styles.user}>
        <UserProfileCard />
      </div>
    </header>
  )
}

export default Header