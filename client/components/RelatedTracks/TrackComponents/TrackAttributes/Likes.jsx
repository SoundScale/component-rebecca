const React = require('react');

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { likes } = this.props;
    return (<div className="">{likes}</div>);
  }
}

module.exports = Likes;
