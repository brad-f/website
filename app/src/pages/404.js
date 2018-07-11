import React from 'react'
import styles from './404.module.css'
import marlowe from './marlowe.jpg'

const NotFoundPage = () => (
  <div>
    <h1 className={styles.topRow}>
      <span>404 - NOT FOUND :(</span>
    </h1>
    <div className={styles.imageWrapper}>
      <img
        className={styles.image}
        alt='marlowe'
        src={marlowe}
      />
    </div>
  </div>
)

export default NotFoundPage
