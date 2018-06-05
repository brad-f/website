import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css';

const Header = () => (
  <div className={styles.topRow}>
    <h1>
      <Link to="/">
        brad fitzwater&apos;s
        <span className={styles.muted}> experiments</span>
      </Link>
    </h1>
  </div>
)

export default Header
