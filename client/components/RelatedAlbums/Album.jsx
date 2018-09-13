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
    return (
      <div className="related-album">
        <AlbumImage />
        <div>
          <AlbumArtist />
          <AlbumTitle />
          <AlbumType />
        </div>
      </div>);
  }
}

module.exports = Album;
