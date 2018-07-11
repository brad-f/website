import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import 'normalize.css'
import styles from './index.module.css'

const Layout = ({ children, data }) => (
  <div className={styles.page}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'theme-color', content: '#000000' }
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto',
          rel: 'stylesheet'
        }
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
