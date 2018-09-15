const React = require('react');
const LikeButton = require('./likeButton.jsx');
const OptionsButton = require('./optionsButton.jsx');
const PlayButton = require('./playButton.jsx');



class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // playing: false,
      // liked: false,
      // options: false,
    };
  }

  render() {
    return (
      <div>
        <PlayButton />
        <LikeButton />
        <OptionsButton />
      </div>
    );
  }
}

module.exports = Container;
