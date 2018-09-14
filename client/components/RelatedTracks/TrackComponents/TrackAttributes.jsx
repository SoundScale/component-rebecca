const React = require('react');
const Plays = require('./TrackAttributes/Plays.jsx');
const Likes = require('./TrackAttributes/Likes.jsx');
const Reposts = require('./TrackAttributes/Reposts.jsx');
const Comments = require('./TrackAttributes/Comments.jsx');

class TrackAttributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { comments, plays, likes, reposts } = this.props;
    return (
      <div className="track-attributes">
        <Plays plays={plays} />
        <Likes likes={likes} />
        <Reposts reposts={reposts} />
        <Comments comments={comments} />
      </div>);
  }
}

module.exports = TrackAttributes;
