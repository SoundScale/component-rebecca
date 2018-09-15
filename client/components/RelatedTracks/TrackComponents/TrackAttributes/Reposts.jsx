const React = require('react');
const convert = require('../../../convert.js');

class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { reposts } = this.props;
    return (
      <div className="track-attribute">
        <img className="repost-image" alt="reposts" />
        <span className="attribute-hover">
          {convert(reposts)}
        </span>
      </div>
    );
  }
}

module.exports = Reposts;
