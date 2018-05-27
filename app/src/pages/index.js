import React from 'react'
import injectSheet from 'react-jss';
import Link from 'gatsby-link'
import image from './me.jpg'

const styles = {
  grid: {
    display: 'grid',
    gridGap: '1rem',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  leftPanel: {
    gridRow: '2',
    gridColumn: '1 / 2'
  },
  imageWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    display: 'block',
    overflow: 'hidden',
    borderRadius: '50%',
    minWidth: '300px',
    minHeight: '300px',
    maxWidth: '90%',
    height: 'auto',
    margin: 'auto'
  },
  rightPanel: {
    gridRow: '2',
    gridColumn: '2 / 3'
  },
  bio: {
    fontSize: '1.7rem',
    lineHeight: '1.8rem'
  },
  links: {
    paddingLeft: '0',
    listStyle: 'none',
    fontSize: '1.7rem',
    lineHeight: '2rem',
    whiteSpace: 'nowrap'
  },
  link: {
    paddingLeft: '0.5rem',
    textDecoration: 'none',
    color: '#008b8b'
  }
}

const IndexPage = ({ classes }) => (
  <div className={classes.grid}>
    <div className={classes.leftPanel}>
      <div className={classes.imageWrapper}>
        <img
          className={classes.image}
          alt='me'
          src={image}
        />
      </div>
    </div>
    <div className={classes.rightPanel}>
      <div className={classes.bio}>
        <p>Hello,</p>
        <p>
          My name is Brad Fitzwater. I am a Software Developer currently living outside of Raleigh, NC. I was born and raised in Charleston, WV and graduated with a degree in Computer Science from Marshall University. I enjoy tinkering with web things, drinking coffee and beer, reading old books, and listening noisy rock albums.
        </p>
        <p>I am a husband and father of twins.</p>
        <p>This site will, most likely, always be a work in progress.</p>
      </div>
      <ul className={classes.links}>
        <li>
          <a
            className={classes.link}
            href='https://github.com/brad-f'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://github.com/brad-f
          </a>
        </li>
        <li>
          <a
            className={classes.link}
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

export default injectSheet(styles)(IndexPage)
