const React = require('react');
const Track = require('./Track.jsx');
const RelatedTracksTitle = require('./RelatedTracksTitle.jsx');

class RelatedTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { relatedTracks } = this.props;
    return (
      <div className="related-tracks-wrapper">
        <RelatedTracksTitle />
        {relatedTracks.map((track, index) => <Track key={index} track={track} />)}
      </div>
    );
  }
}

module.exports = RelatedTracks;
