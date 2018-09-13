const React = require('react');

class TrackArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.artist);
    const { artistName } = this.props.artist;
    return (<div className="track-artist">{artistName}</div>);
  }
}

module.exports = TrackArtist;