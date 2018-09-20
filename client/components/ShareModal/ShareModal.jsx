const React = require('react');
const SongPlayer = require('./SongPlayer.jsx');
const PlayButton = require('../RelatedTracks/hoverComponents/playButton.jsx');

class ShareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChildClick(e) {
    e.stopPropagation();
  }

  render() {
    const { modalSong, closeModal } = this.props;
    console.log('modalSong', modalSong);
    const shareLink = `https://soundcloud.com/${modalSong.artist.artistName.replace(/\s/g, '')}/${modalSong.songTitle.replace(/\s/g, '')}`
    return (
      <div className="modal" onClick={closeModal}>
        <div className="share-modal" onClick={this.handleChildClick}>
          <div className="share-model-top-info">
            <h1 className="modal-title-bar">
              <span className="modal-header">Share</span>
              <span className="modal-header">Embed</span>
              <span className="modal-header">Message</span>
            </h1>
            <div className="modal-song-player">
              <img src={modalSong.songImage} alt="song art" className="modal-song-image" />
              <div>
                <SongPlayer modalSong={modalSong} />
              </div>
            </div>
          </div>
          <div className="share-modal-bottom-info">
            <h2 className="modal-bottom-title-bar">
              <span className="modal-bottom-header">Share</span>
            </h2>
            <div>
              <span className="share-media-images twitter-image" />
              <span className="share-media-images facebook-image" />
              <span className="share-media-images tumblr-image" />
              <span className="share-media-images google-image" />
              <span className="share-media-images pinterest-image" />
              <span className="share-media-images email-image" />
            </div>
            <div>
              <span className="share-textbox">
                <input className="modal-share-link" type="text" defaultValue={shareLink} />
              </span>
              <span>
                <input type="checkbox" className="check-box" />
              </span>
              <span className="share-at">at</span>
              <span>
                <input className="modal-share-link modal-song-time" type="text" defaultValue="0:00" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ShareModal;
