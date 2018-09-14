const React = require('react');

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { likes } = this.props;
    return (
      <div className="track-attribute">
        <img className="like-image" alt="like" />
        <span>{likes}</span>
      </div>
    );
  }
}

module.exports = Likes;
