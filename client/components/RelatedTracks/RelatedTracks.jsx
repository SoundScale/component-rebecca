const React = require('react');
const Track = require('./Track.jsx');
const RelatedTracksTitle = require('./RelatedTracksTitle.jsx');
const HoverContainer = require('./hoverComponents/HoverContainer.jsx');
const ShareModal = require('../../components/ShareModal/ShareModal.jsx');
const Modal = require('../../components/ShareModal/Modal.jsx');

class RelatedTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalSong: this.props.tracks[0],
    };
    this.setModalSong = this.setModalSong.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  setModalSong(song) {
    this.setState({
      modalOpen: true,
      modalSong: song,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
    console.log('clicked');
  }

  render() {
    const { tracks } = this.props;
    const { modalOpen, modalSong } = this.state;
    console.log('tracks =>', tracks);
    return (
      <div className="related-tracks-wrapper">
        <RelatedTracksTitle />
        <div className="track-list-container">
          {tracks.map((track, index) => (
            <div className="track-container" key={index}>
              <Track track={track} />
              <div className="hover-container">
                <HoverContainer key={track.songTitle} track={track} setModalSong={this.setModalSong} />
              </div>
            </div>
          ))}
        </div>
        <Modal modalOpen={modalOpen}>
          <ShareModal closeModal={this.closeModal} modalSong={modalSong} />
        </Modal>
      </div>
    );
  }
}

module.exports = RelatedTracks;
