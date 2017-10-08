const React = require('react');
const injectSheet = require('react-jss').default;

const styles = {
  image: {
    display: 'block',
    overflow: 'hidden',
    borderRadius: '50%',
    minWidth: '150px',
    minHeight: '150px',
    maxWidth: '90%',
    height: 'auto'
  }
};

const ScalableImage = ({ classes, image, alt }) => (
  <img className={classes.image} alt={alt} src={image} />
);

module.exports = injectSheet(styles)(ScalableImage);
