const React = require('react');
const injectSheet = require('react-jss').default;
const styles = require('./styles');

const Title = ({ classes }) => (
  <div className={classes.topRow}>
    <h1 className={classes.topRowText}>
      brad fitzwater&apos;s <span className={classes.topRowMutedText}>experiments</span>
    </h1>
  </div>
);

module.exports = injectSheet(styles)(Title);
