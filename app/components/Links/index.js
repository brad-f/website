const React = require('react');
const injectSheet = require('react-jss').default;
const assign = require('lodash/assign');
const screens = require('../screens');

require('font-awesome/css/font-awesome.css');

const Icon = ({ type }) => (
  <i className={`fa fa-${type}`} aria-hidden="true" />
);

const Link = ({ type, href, classes }) => (
  <li>
    <Icon type={type} />
    <a
      className={classes.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {href}
    </a>
  </li>
);

const links = [
  { type: 'github', href: 'https://github.com/brad-f' },
  { type: 'twitter', href: 'https://twitter.com/bradfitzwater' }
];

const Links = ({ classes }) => (
  <ul className={classes.linkList}>
    {
      links.map(link => (
        <Link
          key={link.type}
          type={link.type}
          href={link.href}
          classes={classes}
        />
      ))
    }
  </ul>
);

const styles = assign(
  {
    linkList: {
      paddingLeft: '0',
      listStyle: 'none',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      whiteSpace: 'nowrap'
    },
    link: {
      paddingLeft: '0.5rem'
    }
  },
  screens.medium({
    linkList: {
      fontSize: '1.5rem'
    }
  }),
  screens.large({
    linklist: {
      fontSize: '1.7rem'
    }
  })
);

module.exports = injectSheet(styles)(Links);
