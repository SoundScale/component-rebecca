const React = require('react');

class OptionsWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { setModalSong, track } = this.props;
    return (
      <div className="options-window">
        <span className="options-window-item">
          <span className="repost-image-options" alt="repostimg" />
          Repost
        </span>
        <span className="options-window-item" onClick={() => setModalSong(track)}>
          <span className="share-image-options" alt="repostspan" />
          Share
        </span>
        <span className="options-window-item">
          <span className="nextup-image-options" alt="repostspan" />
          Add to Next up
        </span>
        <span className="options-window-item">
          <span className="addplaylist-image-options" alt="repostspan" />
          <span>Add to playlist</span>
        </span>
        <span className="options-window-item">
          <span className="station-image-options" alt="repostspan" />
          Station
        </span>
      </div>
    );
  }
}

module.exports = OptionsWindow;
