const React = require('react');
const ArtistPopUp = require('./../../ArtistProfile/ArtistPopUp.jsx');

class AlbumArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.artist);
    const { artist } = this.props;
    return <div><ArtistPopUp artist={artist} /></div>;
    // return (<div className="track-artist attribute-hover">{artistName}</div>);
  }
}

module.exports = AlbumArtist;
