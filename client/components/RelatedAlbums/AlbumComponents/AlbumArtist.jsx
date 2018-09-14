const React = require('react');

class AlbumArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.artist);
    const { artistName } = this.props.artist;
    return (<div className="track-artist attribute-hover">{artistName}</div>);
  }
}

module.exports = AlbumArtist;
