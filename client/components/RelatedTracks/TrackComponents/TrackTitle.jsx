const React = require('react');

class TrackTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { songTitle } = this.props;
    return (<div className="track-title">{songTitle}</div>);
  }
}

module.exports = TrackTitle;
