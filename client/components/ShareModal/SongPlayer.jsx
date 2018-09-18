const React = require('react');
const PlayButton = require('../RelatedTracks/hoverComponents/playButton.jsx');

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { modalSong } = this.props;
    return (
      <div>
        <div className="modal-play-button">
          <PlayButton />
        </div>
        <span>
          <p className="track-artist track-artist-modal">{modalSong.artist.artistName}
            <br />
            <span className="track-title-modal">{modalSong.songTitle}</span>
          </p>
        </span>
      </div>
    )
  }
}

module.exports = SongPlayer;
