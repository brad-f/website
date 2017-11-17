const React = require('react');
const identity = require('lodash/identity');
const injectSheet = require('react-jss').default;

const styles = {
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    display: 'block',
    overflow: 'hidden',
    borderRadius: '50%',
    minWidth: '300px',
    minHeight: '300px',
    maxWidth: '90%',
    height: 'auto',
    margin: 'auto'
  }
};

const ScalableImage = ({ classes, image, alt, onClick }) => (
  <div className={classes.wrapper}>
    <img
      className={classes.image}
      alt={alt}
      src={image}
      onClick={onClick || identity}
    />
  </div>
);

module.exports = injectSheet(styles)(ScalableImage);
