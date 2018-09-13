const React = require('react');
const TrackImage = require('./TrackComponents/TrackImage.jsx');
const TrackArtist = require('./TrackComponents/TrackArtist.jsx');
const TrackTitle = require('./TrackComponents/TrackTitle.jsx');
const TrackAttributes = require('./TrackComponents/TrackAttributes.jsx');

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: [],
    };
  }

  render() {
    return (
      <div className="related-track">
        <TrackImage />
        <div>
          <TrackArtist />
          <TrackTitle />
          <TrackAttributes />
        </div>
      </div>);
  }
}

module.exports = Track;
