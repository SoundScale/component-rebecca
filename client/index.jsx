const React = require('react');
const ReactDOM = require('react-dom');
const RelatedComponents = require('./components/RelatedComponents.jsx');

const App = () => (
  <div>
    <RelatedComponents />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
