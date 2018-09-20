const React = require('react');
const LikeButton = require('./likeButton.jsx');
const OptionsButton = require('./optionsButton.jsx');
const PlayButton = require('./playButton.jsx');
// const MyComponent = require('./PopUp.jsx');
// const ToolTip = require('react-portal-tooltip').default;
// import ToolTip from 'react-portal-tooltip';

// console.log(ToolTip);

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { setModalSong, track } = this.props;
    return (
      <div>
        <PlayButton />
        <LikeButton />
        <OptionsButton setModalSong={setModalSong} track={track} key={track.songTitle} />
      </div>
    );
  }
}

module.exports = Container;
