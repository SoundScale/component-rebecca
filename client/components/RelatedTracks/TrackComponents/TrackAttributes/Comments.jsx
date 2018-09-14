const React = require('react');
const convert = require('../../../convert.js');

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
        <span className="attribute-hover">{convert(comments)}</span>
      </div>
    );
  }
}

module.exports = Comments;
