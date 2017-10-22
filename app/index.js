const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./components/Pages/Main');

require('./assets/favicon.ico');

ReactDOM.render(
  <Main />,
  document.getElementById('main') // eslint-disable-line no-undef
);
