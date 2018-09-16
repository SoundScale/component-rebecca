const React = require('react');

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false,
    };
  }

  likeClick() {
    this.setState(prevState => ({ following: !prevState.following }));
  }

  render() {
    const { following } = this.state;
    if (following) {
      return (
        <button
          type="button"
          className="follow-button follow-button-following"
          onClick={this.likeClick.bind(this)}
        >
          Following
        </button>
      );
    }
    return (
      <button
        type="button"
        className="follow-button border-hover"
        onClick={this.likeClick.bind(this)}
      >
        Follow
      </button>
    );
  }
}

module.exports = FollowButton;
