import React from 'react'
import styles from './404.module.css'
import marlowe from './marlowe.jpg'

const NotFoundPage = () => (
  <div className={styles.imageWrapper}>
    <h1 className={styles.topRow}>
      <span>404 - NOT FOUND :(</span>
    </h1>
    <img
      className={styles.image}
      alt='marlowe'
      src={marlowe}
    />
  </div>
)

export default NotFoundPage
