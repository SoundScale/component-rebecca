const React = require('react');
const AlbumImage = require('./AlbumComponents/AlbumImage.jsx');
const AlbumArtist = require('./AlbumComponents/AlbumArtist.jsx');
const AlbumTitle = require('./AlbumComponents/AlbumTitle.jsx');
const AlbumType = require('./AlbumComponents/AlbumType.jsx');

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: [],
    };
  }

  render() {
    const {
      albumTitle,
      albumType,
      albumImage,
      artist
    } = this.props.album;
    return (
      <div className="related-track">
        <AlbumImage image={albumImage} />
        <div className="related-track-info">
          <AlbumArtist artist={artist} />
          <AlbumTitle title={albumTitle} />
          <AlbumType type={albumType} />
        </div>
      </div>);
  }
}

module.exports = Album;
