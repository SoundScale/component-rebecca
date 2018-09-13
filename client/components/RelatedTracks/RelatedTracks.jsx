const React = require('react');
const axios = require('axios');
const Track = require('./Track.jsx');
const RelatedTracksTitle = require('./RelatedTracksTitle.jsx');

class RelatedTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="related-tracks-wrapper">
        <RelatedTracksTitle />
        {this.props.relatedTracks.map((track, index) => <Track key={index} track={track} />)}
      </div>
    )
  }
}

module.exports = RelatedTracks;
