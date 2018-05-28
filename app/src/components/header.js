import React from 'react'
import injectSheet from 'react-jss';
import Link from 'gatsby-link'

const styles = {
  topRow: {
    gridRow: '1',
    gridColumn: '1 / 3',
    textAlign: 'center',
  },
  topRowLink: {
    textDecoration: 'none',
    color: 'black'
  },
  topRowText: {
    fontSize: '3.0rem'
  },
  topRowMutedText: {
    color: '#636c72'
  },
  topRowText: {
    fontSize: '4.0rem'
  }
}

const Header = ({ classes }) => (
  <div className={classes.topRow}>
    <h1 className={classes.topRowText}>
      <Link className={classes.topRowLink} to="/">
        brad fitzwater&apos;s
        <span className={classes.topRowMutedText}> experiments</span>
      </Link>
    </h1>
  </div>
)

export default injectSheet(styles)(Header)
