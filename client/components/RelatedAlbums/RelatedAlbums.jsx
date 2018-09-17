const React = require('react');
const Album = require('./Album.jsx');
const RelatedAlbumsTitle = require('./RelatedAlbumsTitle.jsx');

class RelatedAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { albums } = this.props;
    return (
      <div className="related-albums-wrapper">
        <RelatedAlbumsTitle />
        {albums.map((album, index) => <Album key={index} album={album} />)}
      </div>
    );
  }
}

module.exports = RelatedAlbums;
