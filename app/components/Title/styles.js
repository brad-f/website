const assign = require('lodash/assign');
const screens = require('../screens');

module.exports = assign(
  {
    topRow: {
      gridRow: '1',
      gridColumn: '1 / 3',
      textAlign: 'center'
    },
    topRowText: {
      fontSize: '3.0rem'
    },
    topRowMutedText: {
      color: '#636c72'
    }
  },
  screens.medium({
    topRowText: {
      fontSize: '3.5rem'
    }
  }),
  screens.large({
    topRowText: {
      fontSize: '4.0rem'
    }
  })
);
