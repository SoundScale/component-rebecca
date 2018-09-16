const React = require('react');
const ArtistPopUp = require('./../../ArtistProfile/ArtistPopUp.jsx');

class TrackArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.artist);
    const { artist } = this.props;
    return <div><ArtistPopUp artist={artist} /></div>;
  }
}

module.exports = TrackArtist;
