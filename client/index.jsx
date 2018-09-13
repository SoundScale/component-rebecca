const React = require('react');
const ReactDOM = require('react-dom');
const RelatedComponents = require('./RelatedComponents.jsx');

const App = () => (
  <RelatedComponents />
);

ReactDOM.render(<App />, document.getElementById('app'));
