const React = require('react');
const enzyme = require('enzyme');
const Title = require('./index');
const styles = require('./styles');

test('should render title', () => {
  const title = enzyme.render(<Title />);
  expect(title.text()).toMatch(/brad fitzwater's experiments/);
})
