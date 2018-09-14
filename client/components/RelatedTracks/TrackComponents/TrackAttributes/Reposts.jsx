const React = require('react');

class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reposts } = this.props;
    return (
      <div className="track-attribute">
        <img className="repost-image" alt="reposts" />
        <span>{reposts}</span>
      </div>
    );
  }
}

module.exports = Reposts;
