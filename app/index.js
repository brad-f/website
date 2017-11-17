const React = require('react');
const ReactDOM = require('react-dom');
const { ThemeProvider } = require('theming');

const Main = require('./components/Pages/Main');

require('./assets/favicon.ico');

const themes = {
  black: {
    color: 'white',
    background: 'black',
  },
  white: {
    color: 'black',
    background: 'white',
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      themeName: 'white'
    };
  }

  render() {
    return (
      <ThemeProvider theme={themes[this.state.themeName]}>
        <Main onImageClick={() => this.changeTheme()} />
      </ThemeProvider>
    );
  }

  changeTheme() {
    if (this.state.themeName === 'black') {
      this.setState({ themeName: 'white' });
    } else {
      this.setState({ themeName: 'black' });
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main') // eslint-disable-line no-undef
);
