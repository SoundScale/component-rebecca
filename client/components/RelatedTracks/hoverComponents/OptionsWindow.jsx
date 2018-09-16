const React = require('react');

class OptionsWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="options-window">
        <span className="options-window-item">
          <img className="repost-image-options" alt="repostimg" />
          Repost
        </span>
        <span className="options-window-item">
          <img className="share-image-options" alt="repostimg" />
          Share
        </span>
        <span className="options-window-item">
          <img className="nextup-image-options" alt="repostimg" />
          Add to Next up
        </span>
        <span className="options-window-item">
          <img className="addplaylist-image-options" alt="repostimg" />
          Add to playlist
        </span>
        <span className="options-window-item">
          <img className="station-image-options" alt="repostimg" />
          Station
        </span>
      </div>
    );
  }
}

module.exports = OptionsWindow;
