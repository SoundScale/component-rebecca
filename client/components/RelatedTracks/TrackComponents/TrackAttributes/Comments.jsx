const React = require('react');

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { comments } = this.props;
    return (<div className="">{comments}</div>);
  }
}

module.exports = Comments;
