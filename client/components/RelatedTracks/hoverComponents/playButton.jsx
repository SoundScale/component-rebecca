const React = require('react');

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }

  playOrPause() {
    this.setState(prevState => ({ playing: !prevState.playing }));
  }

  render() {
    const { playing } = this.state;
    if (playing) {
      return <span className="sc-button-pause" onClick={this.playOrPause.bind(this)} />;
    }
    return <span className="sc-button-play" onClick={this.playOrPause.bind(this)} />;
  }
}

module.exports = PlayButton;
