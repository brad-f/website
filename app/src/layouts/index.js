import React from 'react'
import injectSheet from 'react-jss';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Header from '../components/header'
import './index.css'

const styles = {
  page: {
    display: 'grid',
    gridGap: '1rem',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: '\'Roboto\', sans-serif'
  },
  pageWrapper: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
  }
};

const Layout = ({ children, data, classes }) => (
  <div className={classes.page}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.headerText} />
    <div className={classes.pageWrapper}>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default injectSheet(styles)(Layout)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        headerText
      }
    }
  }
`
