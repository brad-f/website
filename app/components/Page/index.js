const React = require('react');
const injectSheet = require('react-jss').default;

require('normalize.css');

const Title = require('../Title');

const styles = {
  page: {
    display: 'grid',
    gridGap: '1rem',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: '\'Roboto\', sans-serif'
  }
};

const Page = ({ classes, children }) => (
  <div className={classes.page}>
    <Title />
    {children}
  </div>
);

module.exports = injectSheet(styles)(Page);
