const React = require('react');

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { comments } = this.props;
    return (
      <div className="track-attribute">
        <img className="comment-image" alt="comment" />
        <span>{comments}</span>
      </div>
    );
  }
}

module.exports = Comments;
