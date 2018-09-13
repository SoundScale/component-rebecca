const React = require('react');

class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reposts } = this.props;
    return (<div className="">{reposts}</div>);
  }
}

module.exports = Reposts;
