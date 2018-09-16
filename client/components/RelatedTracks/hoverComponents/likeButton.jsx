const React = require('react');

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  likeClick() {
    this.setState(prevState => ({ liked: !prevState.liked }));
  }

  render() {
    const { liked } = this.state;
    if (liked) {
      return <button type="button" className="sc-hover-button like-button-liked" onClick={this.likeClick.bind(this)} />;
    }
    return <button type="button" className="sc-hover-button like-button border-hover" onClick={this.likeClick.bind(this)} />;
  }
}

module.exports = LikeButton;
