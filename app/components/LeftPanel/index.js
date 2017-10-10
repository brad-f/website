const React = require('react');
const injectSheet = require('react-jss').default;
const assign = require('lodash/assign');
const screens = require('../screens');

const styles = assign(
  {
    leftPanel: {
      gridRow: '2',
      gridColumn: '1 / 3'
    }
  },
  screens.medium({
    leftPanel: {
      gridRow: '2',
      gridColumn: '1 / 2'
    }
  })
);

const LeftPanel = ({ classes, children }) => (
  <div className={classes.leftPanel}>
    { children }
  </div>
);

module.exports = injectSheet(styles)(LeftPanel);
