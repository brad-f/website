import React from 'react'
import Link from 'gatsby-link'
import image from './me.jpg'

import styles from './index.module.css'
import 'font-awesome/css/font-awesome.css'

const IndexPage = () => (
  <div className={styles.grid}>
    <div className={styles.leftPanel}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          alt='me'
          src={image}
        />
      </div>
    </div>
    <div className={styles.rightPanel}>
      <div className={styles.bio}>
        <p>Hello,</p>
        <p>
          My name is Brad Fitzwater. I am a Software Developer currently living outside of Raleigh, NC. I was born and raised in Charleston, WV and graduated with a degree in Computer Science from Marshall University. I enjoy tinkering with web things, drinking coffee and beer, reading old books, and listening noisy rock albums.
        </p>
        <p>I am a husband and father of twins.</p>
        <p>This site will, most likely, always be a work in progress.</p>
      </div>
      <ul className={styles.links}>
        <li>
          <i className={`fa fa-github`} aria-hidden="true" />
          <a
            className={styles.link}
            href='https://github.com/brad-f'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://github.com/brad-f
          </a>
        </li>
        <li>
          <i className={`fa fa-twitter`} aria-hidden="true" />
          <a
            className={styles.link}
            href='https://twitter.com/bradfitzwater'
            target='_blank'
            rel='noopener noreferrer'
          >
           https://twitter.com/bradfitzwater
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default IndexPage
