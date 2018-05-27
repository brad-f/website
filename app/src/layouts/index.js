import React from 'react'
import injectSheet from 'react-jss';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Header from '../components/header'
import 'normalize.css'

const styles = {
  page: {
    margin: '0 auto',
    maxWidth: '100%',
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
    fontFamily: '\'Roboto\', sans-serif'
  }
};

const Layout = ({ children, data, classes }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto<Paste>',
          rel: 'stylesheet'
        }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.headerText} />
    <div className={classes.page}>
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
