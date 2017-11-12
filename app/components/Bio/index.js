const React = require('react');
const assign = require('lodash/assign');
const injectSheet = require('react-jss').default;
const screens = require('../screens');

const styles = assign(
  {
    bio: {
      fontSize: '1.5rem',
      lineHeight: '1.8rem'
    }
  },
  screens.medium({
    bio: {
      fontSize: '1.5rem',
      lineHeight: '1.8rem'
    }
  }),
  screens.large({
    bio: {
      fontSize: '1.7rem',
      lineHeight: '1.8rem'
    }
  })
);

const p = content => (<p>{content}</p>);

const Bio = ({ classes }) => (
  <div className={classes.bio}>
    {p('Hello,')}
    {p('My name is Brad Fitzwater. I am a Software Developer currently living outside of Raleigh, NC. I was born and raised in Charleston, WV and graduated with a degree in Computer Science from Marshall University. I enjoy tinkering with web things, drinking coffee and beer, reading old books, and listening noisy rock albums.')}
    {p('I am a husband and father of twins.')}
    {p('This site will, most likely, always be a work in progress.')}
  </div>
);

module.exports = injectSheet(styles)(Bio);
