const React = require('react');
const injectSheet = require('react-jss').default;
const assign = require('lodash/assign');
const screens = require('../screens');

const styles = assign(
  {
    rightPanel: {
      gridRow: '3',
      gridColumn: '1 / 3'
    }
  },
  screens.medium({
    rightPanel: {
      gridRow: '2',
      gridColumn: '2 / 3'
    }
  })
);

const RightPanel = ({ classes, children }) => (
  <div className={classes.rightPanel}>
    { children }
  </div>
);

module.exports = injectSheet(styles)(RightPanel);
